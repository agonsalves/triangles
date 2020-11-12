import React, {
    useEffect,
    useRef,
    useState
}                   from 'react'
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
import {gradients}  from './gradients'
import {
    buildQuadrant,
    flip,
    increment,
    maybeFlip,
    positionToCoords
}                   from './utils'

const black = ['black', 'black']

const App = () => {
    const textRef = useRef(null)
    const [dimensions, setDimensions] = useState(10)
    const [squareSize, setSquareSize] = useState(50)
    const [updateInterval, setUpdateInterval] = useState(2000)
    const [isColor, setIsColor] = useState(false)
    const [isDark, setIsDark] = useState(false)
    const [colors, setColors] = useState(black)
    const [values, setValues] = useState([])
    const [isUpdating, setIsUpdating] = useState(false)
    const [method, setMethod] = useState('collection')
    const q = [0, 1, 2, 3]

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

    const toggleRandomize = () => setIsUpdating(isUpdating => !isUpdating)

    const copyToClipboard = () => {
        textRef.current.select()
        document.execCommand('copy')
    }

    useEffect(() => {
        setValues(buildQuadrant(dimensions))
    }, [dimensions])

    useEffect(() => {
        const methods = {
            single: () => updateValue(Math.floor(Math.random() * (dimensions * dimensions - 1))),
            all: () => setValues(buildQuadrant(dimensions)),
            collection: () => setValues(collection[dimensions][Math.floor(Math.random() * collection[dimensions].length)])
        }

        let updateFunc
        if (isUpdating)
            updateFunc = setInterval(() => {
                isColor ? setColors(maybeFlip(gradients[Math.floor(Math.random() * (gradients.length - 1))])) : setColors(black)
                methods[method]()
            }, updateInterval)

        return () => clearInterval(updateFunc)
        // eslint-disable-next-line
    }, [isUpdating, method, dimensions, updateInterval, isColor])

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
                                colors={colors}
                            />
                        )}
                    </Quadrant>
                )}
            </Frame>
            <PanelWrapper>
                <Panel>
                    <select onChange={(e) => setMethod(e.target.value)} defaultValue="collection">
                        <option value="single">single</option>
                        <option value="all">all</option>
                        <option value="collection">collection</option>
                    </select>
                    <Button onClick={toggleRandomize}>Randomize:<br/>{isUpdating ? 'on' : 'off'}</Button>
                    <HiddenField id="copyarea" ref={textRef} value={JSON.stringify(values).trim()} readOnly/>
                    <Button onClick={copyToClipboard}>Copy</Button>
                    <div>
                        <div>
                            Dimensions:
                            <Field onChange={e => setDimensions(e.target.value)} value={dimensions} type="number"/>
                        </div>
                        <div>
                            Square Size:
                            <Field onChange={e => setSquareSize(e.target.value)} value={squareSize} type="number"/>
                        </div>
                        <div>
                            Interval:
                            <Field
                                onChange={e => setUpdateInterval(e.target.value)}
                                value={updateInterval}
                                type="number"
                            />
                            ms
                        </div>
                        <div>
                            Color:
                            <Field onChange={e => setIsColor(isColor => !isColor)} value={isColor} type="checkbox"/>
                        </div>
                        <div>
                            Dark Mode:
                            <Field onChange={() => setIsDark(isDark => !isDark)} value={isDark} type="checkbox"/>
                        </div>
                    </div>
                </Panel>
            </PanelWrapper>
        </Container>
    )
}

export default App
