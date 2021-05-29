import React, {
    useEffect,
    useMemo,
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
    buildQuadrant, coinFlip,
    flip,
    increment,
    maybeInvert,
    positionToCoords
} from './utils'
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
        isColorReversed: false,
        isSkewed: false,
        isController: false,
        isListener: false,
        colors: black,
        updateMode: 'collection',
        index: null,
        collectionIndex: 0,
        sequenceIndex: 0,
        colorIndex: 0,
        incoming: '',
        values: []
    })

    const {
        dimensions,
        squareSize,
        interval,
        isColor,
        isDark,
        isUpdating,
        isSkewed,
        isReversed,
        isColorReversed,
        updateMode,
        duration,
        stagger,
        sequenceIndex,
        colorIndex,
        isStaggered,
        isController,
        isListener,
        values
    } = config

    useEffect(() => {
        if (isController || isListener) {
            client.onopen = () => {
                console.log('WebSocket Client Connected');
            }
            client.onmessage = (message) => {
                const incoming = JSON.parse(message.data)
                console.log(incoming)
                if (typeof incoming === 'object' && !isController) {
                    setConfig(incoming)
                }

            }
        }
    }, [isController, isListener])

    const updateConfig = newConfig => setConfig(config => ({...config, ...newConfig}))

    useEffect(() => {
        updateConfig({values: buildQuadrant(dimensions)})
    }, [dimensions])

    const randomizeColors = useMemo(() => () => {
        updateConfig({
            colorIndex: Math.floor((Math.random () * (gradients.length - 1)) + 1),
            isColorReversed: coinFlip()
        })
    }, [])

    const updateValue = useMemo(() => position => {
        const {x, y} = positionToCoords(position, dimensions)

        let updated = [...values]
        updated[position] = increment(values[position])

        if (x !== y) {
            let mirror = (x * dimensions) + y
            updated[mirror] = flip(updated[position])
        }

        return updateConfig({values: updated})
    }, [dimensions, values])

    const updateSingle = useMemo(() => () => {
        updateValue(Math.floor(Math.random() * ((dimensions ^ 2) - 1)))
    }, [dimensions, updateValue])

    const updateAll = useMemo(() => () => {
        if (isColor) {
            randomizeColors()
        }

        updateConfig({values: buildQuadrant(dimensions)})
    }, [dimensions, isColor, randomizeColors])

    const updateCollection = useMemo(() => () => {
        if (isColor) {
            randomizeColors()
        }

        updateConfig({values: maybeInvert(collection[dimensions][Math.floor(Math.random() * collection[dimensions].length)])})
    }, [dimensions, isColor, randomizeColors])

    const updateSequence = useMemo(() => () => {
        setConfig(config => {
            let newIndex = config.sequenceIndex + 1
            if (newIndex === sequence[dimensions].length)
                newIndex = 0

            return {
                ...config,
                sequenceIndex: newIndex,
                values: sequence[dimensions][sequenceIndex]
            }
        })
    }, [dimensions, sequenceIndex])

    useEffect(() => {
        let updateFunc

        if (isUpdating && !isController)
            updateFunc = setInterval(() => {
                switch (updateMode) {
                    case 'single':
                        updateSingle()
                        break
                    case 'all':
                        updateAll()
                        break
                    case 'collection':
                        updateCollection()
                        break
                    case 'sequence':
                        updateSequence()
                        break
                    default:
                }
            }, interval)

        return () => clearInterval(updateFunc)
        // eslint-disable-next-line
    }, [isUpdating, updateMode, dimensions, interval, isColor, sequenceIndex, isController])

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
                                    colorIndex={colorIndex}
                                    isColorReversed={isColorReversed}
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
            <Controls
                config={config}
                setConfig={setConfig}
                setValues={values => updateConfig({values})}
                values={values}
            />
        </Container>
    )
}

export default App
