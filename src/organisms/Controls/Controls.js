import React, { useState, useEffect } from 'react'
import plus from '../../assets/icons/plus.svg'
import './Controls.scss'
import Rover from '../../molecules/Rover/Rover'

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
                <Rover
                    key={i}
                    mars={dimension}
                    {...rover}
                    onChange={newPos => {
                        updateRover(rovers.map((r, j) => {
                            if (i === j) r = newPos
                            return r
                        }))
                    }}
                    onDelete={() => deleteRover(i)}
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