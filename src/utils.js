const getRandomType = () => Math.floor(Math.random() * 4)

export const buildQuadrant = dimensions => {
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

export const increment = value => value === 3 ? 0 : value + 1

export const flip = type => type === 1 ? 3 : type === 3 ? 1 : type

const invert = type => {
    // eslint-disable-next-line default-case
    switch (type) {
        case 0:
            return 2
        case 1:
            return 3
        case 2:
            return 0
        case 3:
            return 1
    }
}

export const positionToCoords = (position, dimensions) => {
    const x = !!position ? position % dimensions : 0
    const y = Math.floor(position / dimensions)

    return {x, y}
}

export const coinFlip = () => !!Math.floor(Math.random() * 2)

export const maybeInvert = array => coinFlip() ? array.map(x => invert(x)) : array

export const bpmToMs = (bpm, note) => Math.round((60000 / bpm) * (note / .25))

//export const msToBpm = (ms, note) =>

export const maxStagger = (interval, dimensions) => Math.round(interval / dimensions)