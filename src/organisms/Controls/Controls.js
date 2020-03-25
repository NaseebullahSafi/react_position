import React, { useState, useEffect } from 'react'
import plus from '../../assets/icons/plus.svg'
import Input from '../../atoms/Input'
import './Controls.scss'

const ControledRover = ({ x, y, face, path, onChange }) => (
    <div className="controls__rover">
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
                <div className="item">
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
                <div className="item">
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
                        <circle cx="12" cy="12" r="2" />
                        <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
                    </svg>
                </div>
                <div className="item">
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
            <Input value={path} readOnly />
        </div>
    </div>
)

const Controls = ({ onUpdate }) => {
    const [rovers, modifyRover] = useState([
        {
            x: 0,
            y: 0,
            face: 'N',
            path: ''
        }
    ]);

    const addRover = rover => modifyRover([
        ...rovers,
        rover
    ])

    const updateRover = updateRovers => modifyRover(updateRovers)

    useEffect(() => {
        onUpdate(rovers)
    })

    return (
        <div className="controls">
            <h1 className="controls__title">Controls</h1>

            {rovers.map((rover, i) => (
                <ControledRover
                    key={i}
                    onChange={obj => {
                        updateRover(rovers.map((r, j) => {
                            if (i === j) {
                                r = obj
                            }
                            return r
                        }))
                    }}
                    {...rover}
                />
            ))}

            <div className="controls__add" onClick={e => {
                e.preventDefault()
                addRover({
                    x: 0,
                    y: 0,
                    face: 'N',
                    path: ''
                })
            }}>
                <img src={plus} />
            </div>
        </div>
    )
}

export default Controls;