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