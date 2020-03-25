import React from "react";
import Proptypes from 'prop-types'
import robot from "../../assets/icons/chevron-right.svg"
import './Mars.scss';

const includes = (arrOfArrs, arr) => arrOfArrs.some(a => arr.every((v, i) => v === [a.x, a.y][i]));

const Grid = ({ matrix, rovers }) => (
    <ul className="mars mars__grid">
        {
            matrix.map((el, i) => el.map(j => (
                <li className={`mars__grid-item ${includes(rovers, j.arr) ? 'mars__grid-item--active' : ''}`} key={j.coord}>
                    <div className="coordinates">{j.coord}</div>
                    {
                        rovers.map((rover, i) => rover.x === j.arr[0] && rover.y === j.arr[1] && (
                            <img
                                key={i}
                                src={robot}
                                className={`rover-face rover-face--${rover.face}`}
                            />
                        ))
                    }
                </li>
            )))
        }
    </ul>
)

const Mars = ({ dimension, rovers }) => {
    const [X, Y] = dimension
    const matrix = Array(Y).fill().map(() => Array(X).fill('-'));
    const newMatrix = []

    for (let i = 0; i < X; i++) {
        for (let j = Y - 1; j >= 0; j--) {
            matrix[i][j] = {
                coord: `( ${j} , ${i} )`,
                arr: [j, i]
            }
        }
    }

    for (let i = X - 1; i >= 0; i--) {
        newMatrix.push(matrix[i])
    }

    return (
        <section id="mars" className="mars">
            <Grid matrix={newMatrix} rovers={rovers} />
        </section>
    )
}

Mars.defaultProps = {
    dimension: [6, 6],
    rovers: [{
        x: 0,
        y: 0,
        face: 'N',
        path: ''
    }]
}

Mars.propTypes = {
    dimension: Proptypes.array,
    rovers: Proptypes.array
}

export default Mars;