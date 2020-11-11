import React, {
    useEffect,
    useRef,
    useState
}                   from 'react'
import {collection} from './collection'
import {
    Button,
    Container,
    Frame,
    Input,
    Panel,
    Quadrant,
    Triangle
}                   from './Elements'
import {gradients}  from './gradients'
import {
    buildQuadrant,
    flip,
    increment,
    maybeFlip,
    positionToCoords
} from './utils'

const black = ['black', 'black']

const App = () => {
    const textRef = useRef(null)
    const [dimensions, setDimensions] = useState(10)
    const [squareSize, setSquareSize] = useState(50)
    const [updateInterval, setUpdateInterval] = useState(2000)
    const [isColor, setIsColor] = useState(false)
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
            <Frame size={(dimensions * 2) * squareSize}>
                {q.map(number =>
                    <Quadrant number={number} className="quadrant" key={number}>
                        {values.map((type, i) =>
                            <Triangle
                                dimensions={dimensions}
                                type={type}
                                key={i}
                                position={i}
                                updateValue={updateValue}
                                isDelayed={isUpdating}
                                colors={colors}
                            />
                        )}
                    </Quadrant>
                )}
            </Frame>
            <Panel>
                <Button onClick={toggleRandomize}>Randomize<br/>{isUpdating ? 'on' : 'off'}</Button>
                <select onChange={(e) => setMethod(e.target.value)} defaultValue="collection">
                    <option value="single">single</option>
                    <option value="all">all</option>
                    <option value="collection">collection</option>
                </select>
                <Input id="copyarea" ref={textRef} value={JSON.stringify(values).trim()} readOnly/>
                <Button onClick={copyToClipboard}>Copy</Button>
                <div>
                    <div>
                        Dimensions:
                        <input onChange={e => setDimensions(e.target.value)} value={dimensions} type="number"/>
                    </div>
                    <div>
                        Square Size:
                        <input onChange={e => setSquareSize(e.target.value)} value={squareSize} type="number"/>
                    </div>
                    <div>
                        Interval:
                        <input onChange={e => setUpdateInterval(e.target.value)} value={updateInterval} type="number"/>ms
                    </div>
                    <div>
                        Color:
                        <input onChange={e => setIsColor(isColor => !isColor)} value={isColor} type="checkbox"/>
                    </div>
                </div>
            </Panel>
        </Container>
    )
}

export default App
