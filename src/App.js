import React, {
    useEffect,
    useRef,
    useState
} from 'react'
import {collection} from './collection'
import {
    Button,
    Container,
    Field,
    Frame,
    HiddenField,
    Panel,
    PanelWrapper,
    Quadrant,
    Triangle
} from './Elements'
import {gradients} from './gradients'
import {
    buildQuadrant,
    flip,
    increment,
    maybeFlip,
    positionToCoords
} from './utils'

const black = ['black', 'black']
const q = [0, 1, 2, 3]

const App = () => {
    const textRef = useRef(null)
    const [config, setConfig] = useState({
        dimensions: 10,
        squareSize: 50,
        interval: 2000,
        duration: 250,
        stagger: 75,
        isColor: false,
        isDark: false,
        isUpdating: false,
        colors: black,
        method: 'collection',
        index: null,
        sequenceIndex: 0,
        incoming: ''
    })
    const [values, setValues] = useState([])
    const {dimensions, squareSize, interval, isColor, isDark, isUpdating, method, colors, duration, stagger, incoming} = config

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

    const toggleRandomize = () => setConfig(config => ({...config, isUpdating: !config.isUpdating}))

    const copyToClipboard = () => {
        textRef.current.select()
        document.execCommand('copy')
    }

    const processInput = () => {
        const newLayout = JSON.parse(incoming)

        if (Array.isArray(newLayout) && newLayout.length === dimensions ^ 2)
            setValues(newLayout)
    }

    useEffect(() => {
        const methods = {
            single: () => updateValue(Math.floor(Math.random() * ((dimensions ^ 2) - 1))),
            all: () => setValues(buildQuadrant(dimensions)),
            collection: () => setValues(collection[dimensions][Math.floor(Math.random() * collection[dimensions].length)])
        }

        let updateFunc
        if (isUpdating)
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
    }, [isUpdating, method, dimensions, interval, isColor])

    return (
        <Container>
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
                                isUpdating={isUpdating}
                                colors={colors}
                                duration={duration}
                                stagger={stagger}
                            />
                        )}
                    </Quadrant>
                )}
            </Frame>
            <PanelWrapper>
                <Panel>
                    <select
                        onChange={e => setConfig(config => ({...config, method: e.target.value}))}
                        defaultValue="collection"
                    >
                        <option value="single">single</option>
                        <option value="all">all</option>
                        <option value="collection">collection</option>
                        <option value="sequence">sequence</option>
                    </select>
                    <Button onClick={toggleRandomize}>Randomize:<br/>{isUpdating ? 'on' : 'off'}</Button>
                    <HiddenField id="copyarea" ref={textRef} value={JSON.stringify(values).trim()} readOnly/>
                    <Button onClick={copyToClipboard}>Copy</Button>
                    <div>
                        <div>
                            Dimensions:
                            <Field
                                onChange={e => setConfig(config => ({...config, dimensions: e.target.value}))}
                                value={dimensions}
                                type="number"
                            />
                        </div>
                        <div>
                            Square Size:
                            <Field
                                onChange={e => setConfig(config => ({...config, squareSize: e.target.value}))}
                                value={squareSize}
                                type="number
                                "/>
                        </div>
                        <div>
                            Interval:
                            <Field
                                onChange={e => setConfig(config => ({...config, interval: e.target.value}))}
                                value={interval}
                                type="number"
                            />
                            ms
                        </div>
                        <div>
                            Stagger:
                            <Field
                                onChange={e => setConfig(config => ({...config, stagger: e.target.value}))}
                                value={stagger}
                                type="number"
                            />
                            ms
                        </div>
                        <div>
                            Color:
                            <Field
                                onChange={() => setConfig(config => ({...config, isColor: !config.isColor}))}
                                value={isColor}
                                type="checkbox"
                            />
                        </div>
                        <div>
                            Dark Mode:
                            <Field
                                onChange={() => setConfig(config => ({...config, isDark: !config.isDark}))}
                                value={isDark}
                                type="checkbox"
                            />
                        </div>
                        <div>
                            Input:
                            <Field
                                onChange={e => setConfig(config => ({...config, incoming: e.target.value}))}
                                value={incoming}
                                type="text"
                            />
                        </div>
                        <div>
                            <Button onClick={processInput}>Update</Button>
                        </div>
                    </div>
                </Panel>
            </PanelWrapper>
        </Container>
    )
}

export default App
