import React, { useState, useEffect } from 'react'
import plus from '../../assets/icons/plus.svg'
import Input from '../../atoms/Input'
import './Controls.scss'


/**
 * Will determine ((x || y) + 1) move based on the current
 * face
 */
const MOVE = {
    N: [0, 1],
    E: [1, 0],
    S: [0, -1],
    W: [-1, 0]
}

/**
 * Will determine the next orientation of the rover when
 * moving left
 */
const LEFT = {
    N: 'W',
    E: 'N',
    S: 'E',
    W: 'S'
}

/**
 * Will determine the next orientation of the rover when
 * mocing right
 */
const RIGHT = {
    N: 'E',
    E: 'S',
    S: 'W',
    W: 'N'
}

/**
 * func. call that determines the final position of the 
 * rover based on move. It will not move rover if the
 * move dictates outside of the mars.
 * 
 * @param {Number} x 
 * @param {Number} y 
 * @param {String} face 
 * @param {Array} dim 
 */
const move = (x, y, face, dim) => {
    let finalCoords = [x, y]

    // check if x goes beyond the mars y dimension
    if (x + MOVE[face][0] >= 0 && x + MOVE[face][0] <= dim[1] - 1) {
        finalCoords[0] = x + MOVE[face][0]
    }

    // check if y goes beyond the mars x dimension
    if (y + MOVE[face][1] >= 0 && y + MOVE[face][1] <= dim[0] - 1) {
        finalCoords[1] = y + MOVE[face][1]
    }

    return finalCoords
}

/**
 * Controles component which cares about rendering the action CTAs
 * @param {Object}
 */
const ControledRover = ({ dim, x, y, face, path, onChange, onDelete }) => (
    <div className="controls__rover">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4d5961"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="close-icon"
            onClick={() => onDelete()}
        >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
        <div className="position">
            <div>
                <span>Pos ( x, y, face ): </span>
                <Input
                    placeholder={`${x} ${y} ${face}`}
                    onChange={(v) => {
                        const [_x = 0, _y = 0, _face = 'N'] = v.target.value
                        onChange({
                            x: Number(_x),
                            y: Number(_y),
                            face: _face,
                            path
                        })
                    }}
                />
            </div>
            <div className="controls__actions">
                <div className="item" onClick={() => onChange({
                    x,
                    y,
                    face: LEFT[face],
                    path
                })}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#4d5961"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12" />
                        <polyline points="12 19 5 12 12 5" />
                    </svg>
                </div>
                <div className="item" onClick={() => {
                    let afterMove = move(x, y, face, dim)

                    onChange({
                        x: afterMove[0],
                        y: afterMove[1],
                        face,
                        path: path + face
                    })
                }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#d06262"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="2" />
                        <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
                    </svg>
                </div>
                <div className="item" onClick={() => onChange({
                    x,
                    y,
                    face: RIGHT[face],
                    path
                })}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#4d5961"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="path">
            <Input value={path} readOnly placeholder="Command path" />
        </div>
    </div>
)

/**
 * Will render the control container which will allow users to
 * interact with n number of rovers
 * @param {Object} 
 */
const Controls = ({ dimension, onUpdate }) => {
    const defaultRover = {
        x: 0,
        y: 0,
        face: 'N',
        path: ''
    }
    const [rovers, modifyRover] = useState([defaultRover]);

    // call this when adding new rover
    const addRover = rover => modifyRover([...rovers, rover])

    // call this when updating an existing rover
    const updateRover = updateRovers => modifyRover(updateRovers)

    // call this when deleting the rover
    const deleteRover = i => modifyRover(rovers.filter((_, j) => 1 !== j))

    // let us update on mounting the component
    useEffect(() => onUpdate(rovers))

    return (
        <div className="controls">
            <h1 className="controls__title">Controls</h1>

            {rovers.map((rover, i) => (
                <ControledRover
                    key={i}
                    dim={dimension}
                    onChange={obj => {
                        updateRover(rovers.map((r, j) => {
                            if (i === j) r = obj
                            return r
                        }))
                    }}
                    onDelete={() => deleteRover(i)}
                    {...rover}
                />
            ))}

            <div className="controls__add" onClick={e => {
                e.preventDefault()
                addRover(defaultRover)
            }}>
                <img src={plus} />
            </div>
        </div>
    )
}

export default Controls;