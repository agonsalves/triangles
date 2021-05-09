import React, {
    useEffect,
    useState
}                   from 'react'
import Controls     from './Controls'
import {collection} from './collection'
import {
    Container,
    Frame,
    Quadrant,
    Skewer
}                   from './Elements'
import {gradients}  from './gradients'
import {sequence}   from './sequence'
import {
    buildQuadrant,
    flip,
    increment,
    maybeFlip,
    maybeInvert,
    positionToCoords
}                   from './utils'
import Triangle     from './Triangle'
import { w3cwebsocket as W3CWebSocket } from "websocket"

const black = ['black', 'black']
const q = [0, 1, 2, 3]

export const client = new W3CWebSocket('ws://127.0.0.1:8080')

const App = () => {
    const [config, setConfig] = useState({
        dimensions: 10,
        squareSize: 50,
        interval: 2000,
        bpm: 120,
        note: 1,
        duration: 250,
        stagger: 75,
        isColor: false,
        isDark: false,
        isUpdating: false,
        isStaggered: true,
        isReversed: false,
        isSkewed: false,
        isController: false,
        isListener: false,
        colors: black,
        method: 'collection',
        index: null,
        sequenceIndex: 0,
        incoming: ''
    })
    const [values, setValues] = useState([])

    const {
        dimensions,
        squareSize,
        interval,
        isColor,
        isDark,
        isUpdating,
        isSkewed,
        isReversed,
        method,
        colors,
        duration,
        stagger,
        sequenceIndex,
        isStaggered,
        isController,
        isListener
    } = config

    useEffect(() => {
        if (isController || isListener) {
            client.onopen = () => {
                console.log('WebSocket Client Connected');
            };
            client.onmessage = (message) => {
                const incoming = JSON.parse(message.data)
                console.log(incoming);
                if (typeof incoming === 'object' && !isController) {
                    setConfig(incoming)
                }

            };
        }
    }, [isController, isListener])

    useEffect(() => {
        setValues(buildQuadrant(dimensions))
    }, [dimensions])

    const updateValue = position => {
        const {x, y} = positionToCoords(position, dimensions)

        setValues(old => {
            let updated = [...old]
            updated[position] = increment(old[position])

            if (x !== y) {
                let mirror = (x * dimensions) + y
                updated[mirror] = flip(updated[position])
            }

            return updated
        })
    }


    useEffect(() => {
        const methods = {
            single: () => updateValue(Math.floor(Math.random() * ((dimensions ^ 2) - 1))),
            all: () => setValues(buildQuadrant(dimensions)),
            collection: () => setValues(maybeInvert(collection[dimensions][Math.floor(Math.random() * collection[dimensions].length)])),
            sequence: () => {
                setValues(sequence[dimensions][sequenceIndex])
                setConfig(config => {
                    let newIndex = config.sequenceIndex + 1
                    if (newIndex === sequence[dimensions].length)
                        newIndex = 0

                    return {
                        ...config,
                        sequenceIndex: newIndex
                    }
                })
            }
        }

        let updateFunc
        if (isUpdating && !isController)
            updateFunc = setInterval(() => {
                isColor
                    ? setConfig(config => ({
                        ...config,
                        colors: maybeFlip(gradients[Math.floor(Math.random() * (gradients.length - 1))])
                    }))
                    : setConfig(config => ({...config, colors: black}))
                methods[method]()
            }, interval)

        return () => clearInterval(updateFunc)
        // eslint-disable-next-line
    }, [isUpdating, method, dimensions, interval, isColor, sequenceIndex, isController])

    return (
        <Container>
            <Skewer isUpdating={isUpdating && isSkewed}>
                <Frame size={(dimensions * 2) * squareSize} isDark={isDark}>
                    {q.map(number =>
                        <Quadrant number={number} className="quadrant" key={number}>
                            {values.map((type, i) =>
                                <Triangle
                                    dimensions={dimensions}
                                    type={type}
                                    key={i}
                                    position={i}
                                    updateValue={updateValue}
                                    isUpdating={isUpdating && !isController}
                                    colors={colors}
                                    duration={duration}
                                    stagger={stagger}
                                    isStaggered={isStaggered}
                                    isReversed={isReversed}
                                />
                            )}
                        </Quadrant>
                    )}
                </Frame>
            </Skewer>
            <Controls config={config} setConfig={setConfig} setValues={setValues} values={values}/>
        </Container>
    )
}

export default App
