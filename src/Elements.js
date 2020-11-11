import React, {memo, useState}      from 'react'
import {
    animated,
    useSpring
}                         from 'react-spring'
import styled             from 'styled-components'
import {
    getRange,
    positionToCoords
} from './utils'

const pointSet = [
    'M0,0 L 0,100 L 100,100Z',
    'M0,100 L 100,100 L 100,0Z',
    'M100,100 L 100,0 L 0,0Z',
    'M100,0 L 0,0 L 0,100Z'
]

export const Triangle = memo(({dimensions, type, updateValue, position, isDelayed, colors}) => {
    const [output, setOutput] = useState(colors)
    const {x, y} = positionToCoords(position, dimensions)
    const {shape, color} = useSpring({
        shape: pointSet[type],
        color: (x + y) / ((dimensions * 2) - 2),
        config: {
            precision: 0.05,
            duration: 250
        },
        delay: isDelayed ? Math.max(x, y) * 75 : 0,
        onStart: () => setTimeout(() => setOutput(colors), 35),
    })

    return (
        <Model
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            dimensions={dimensions}
            type={type}
            onClick={() => updateValue(position)}
        >
            <animated.path d={shape} style={{fill: color?.interpolate({range: getRange(output), output})}}/>
        </Model>
    )
})

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
`

export const Frame = styled.div`
    background-color: white;
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
`

export const Quadrant = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: flex-end;
    transform: rotate(${({number}) => number * 90}deg);
    grid-area: q${({number}) => number + 1};
`

export const Panel = styled.div`
    background-color: white;
    opacity: 0;
    transition: opacity .2s ease-out;
    display: flex;
    position: relative;
    &:hover {
      opacity: 1;
    }
`

export const Button = styled.div`
    width: 100px;
    height: 100px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
`

export const Input = styled.input`
    height: 0;
    padding: 0;
    border: none;
    position: absolute;
`