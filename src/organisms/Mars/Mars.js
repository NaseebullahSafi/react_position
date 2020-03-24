import React from "react";
import './Mars.scss';

const Grid = ({matrix}) => (
    <ul className="mars mars__grid">
        {
            matrix.map((el, i) => el.map(inner => (
                <li className="mars__grid-item" key={`(${i},${inner})`}>
                    <div className="coordinates">{inner}</div>
                </li>
            )))
        }
    </ul>
)

const Mars = ({dimension}) => {
    const [X, Y] = dimension
    const matrix = Array(Y).fill().map(() => Array(X).fill('-'));
    const newMatrix = []

    for (let i = 0; i < X; i++) {
        for (let j = Y - 1; j >= 0; j--) {
            matrix[i][j] = `( ${j} , ${i} )`
        }
    }

    for (let i = X - 1; i >= 0; i--) {
        newMatrix.push(matrix[i])
    }

    return (
        <section id="mars" className="mars">
            <Grid matrix={newMatrix} />
        </section>
    )
}

export default Mars;