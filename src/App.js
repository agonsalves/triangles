import React, {
    useEffect,
    useRef,
    useState
}                   from 'react'
import {collection} from './collection'
import {
    Button,
    Frame,
    Input,
    Panel,
    Quadrant,
    Triangle
}                   from './Elements'
import {
    buildQuadrant,
    flip,
    increment
}                   from './utils'

const App = () => {
    const textRef = useRef(null)
    const [dimensions, setDimensions] = useState(10)
    const [squareSize, setSquareSize] = useState(45)

    const [values, setValues] = useState([])
    const [isUpdating, setIsUpdating] = useState(false)
    const [method, setMethod] = useState('single')
    const q = [0, 1, 2, 3]

    const updateValue = position => {
        const x = !!position ? position % dimensions : 0
        const y = Math.floor(position / dimensions)

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

        let interval
        if (isUpdating)
            interval = setInterval(() => methods[method](), 2000)

        return () => clearInterval(interval)
    }, [isUpdating, method, dimensions])

    return (
        <div className="App">
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
                            />
                        )}
                    </Quadrant>
                )}
            </Frame>
            <Panel>
                <Button onClick={toggleRandomize}>Randomize<br/>{isUpdating ? 'on' : 'off'}</Button>
                <select onChange={(e) => setMethod(e.target.value)} defaultValue="single">
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
                </div>
            </Panel>
        </div>
    )
}

export default App
