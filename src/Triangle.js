import React, { memo }         from 'react'
import { positionToCoords }    from './utils'
import interpolate             from 'color-interpolate'
import { animated, useSpring } from 'react-spring'
import { Model }               from './Elements'

const pointSet = [
    'M0,0 L 0,100 L 100,100Z',
    'M0,100 L 100,100 L 100,0Z',
    'M100,100 L 100,0 L 0,0Z',
    'M100,0 L 0,0 L 0,100Z'
]

const Triangle = memo(({
                           dimensions,
                           type,
                           updateValue,
                           position,
                           colors,
                           isUpdating,
                           duration,
                           stagger,
                           isStaggered,
                           isReversed
                       }) => {
    const {x, y} = positionToCoords(position, dimensions)
    const colorMap = interpolate(colors)
    const {shape, fill} = useSpring({
        shape: pointSet[type],
        fill: colorMap((x + y) / ((dimensions * 2) - 2)),
        config: {
            precision: 0.1,
            duration
        },
        delay: isUpdating && isStaggered ? (isReversed ? dimensions - Math.max(x, y) : Math.max(x, y)) * stagger : 0,
    })

    return (
        <Model
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            dimensions={dimensions}
            type={type}
            onClick={() => updateValue(position)}
        >
            <animated.path d={shape} style={{fill}}/>
        </Model>
    )
})

export default Triangle