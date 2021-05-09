import React, { memo }         from 'react'
import { animated, useSpring } from 'react-spring'
import styled                  from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const Skewer = memo(({isUpdating, children}) => {
    const styles = useSpring({
        skewX: 0,
        skewY: 0,
        loop: {reverse: true},
        config: {tension: 50},
        to: [
            {
                skewX: 15,
                skewY: 15
            },
            {
                skewX: -15,
                skewY: -15
            },
        ]
    })

    return (isUpdating && (
        <animated.div style={styles} className="skewer">{children}</animated.div>
    )) || children
})

export const Frame = styled.div`
  background-color: ${({isDark}) => isDark ? 'black' : 'white'};
  display: grid;
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
        "q4 q1"
        "q3 q2";
`

export const Model = styled.svg`
  width: ${({dimensions}) => 100 / (dimensions)}%;
  height: ${({dimensions}) => 100 / (dimensions)}%;
`

export const Quadrant = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: flex-end;
  transform: rotate(${({number}) => number * 90}deg);
  grid-area: q${({number}) => number + 1};
`

export const PanelWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

export const Panel = styled.div`
  background-color: white;
  opacity: 0;
  transition: opacity .2s ease-out;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 3px;

  &:hover {
    opacity: 1;
  }
`

export const Button = styled.div`
  width: 100px;
  height: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border: 1px solid #333;
  text-align: center;
`

export const HiddenField = styled.input`
  height: 0;
  padding: 0;
  border: none;
  position: absolute;
`

export const Field = styled.input`
  width: 50px;
`