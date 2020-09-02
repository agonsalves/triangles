import React, {memo, useState, useEffect} from 'react'
import styled            from 'styled-components'

const Triangle = memo(({dimensions, type, updateValue, position}) =>
    <Model
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        dimensions={dimensions}
        type={type}
        className={`type-${type}`}
        onClick={() => updateValue(position)}
    >
        <polygon points="0 0, 100 100, 0 100" fill="black"/>
    </Model>)

const Frame = styled.div`
    display: grid;
    width: ${({size}) => size}px;
    height: ${({size}) => size}px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "q4 q1"
        "q3 q2";
`

const Model = styled.svg`
    width: ${({dimensions}) => 100 / (dimensions)}%;
    height:  ${({dimensions}) => 100 / (dimensions)}%;
    transform: rotate(${({type}) => type * 90}deg);
    transition: transform .3s ease-out;
`

const Quadrant = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: flex-end;
    transform: rotate(${({number}) => number * 90}deg);
    grid-area: q${({number}) => number + 1};
`

const Button = styled.div`
    width: 100px;
    height: 100px;
    cursor: pointer;
`

const getRandomType = () => Math.floor(Math.random() * 4)

const buildQuadrant = dimensions => {
    let quadrant = []
    for (let y = 0; y < dimensions; y++) {
        for (let x = 0; x < dimensions; x++) {
            if (y <= x)
                quadrant.push(getRandomType())
            else {
                quadrant.push(flip(quadrant[(x * dimensions) + y]))
            }
        }
    }

    return quadrant
}

const increment = value => value === 3 ? 0 : value + 1

const flip = type => type === 1 ? 3 : type === 3 ? 1 : type

const App = () => {
    const dimensions = 12
    const squareSize = 40

    const size = (dimensions * 2) * squareSize
    const [values, setValues] = useState(buildQuadrant(dimensions))
    const [isUpdating, setIsUpdating] = useState(false)
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

    useEffect(() => {
        let interval
        if (isUpdating)
            interval = setInterval(() => updateValue(Math.floor(Math.random() * (dimensions * dimensions -1))), 500)

        return () => clearInterval(interval)
    }, [isUpdating])

    return (
        <div className="App">
            <Frame size={size}>
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
            <Button onClick={() => setIsUpdating(isUpdating => !isUpdating)} />
        </div>
    )
}

export default App
