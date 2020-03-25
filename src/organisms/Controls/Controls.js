import React, {useState} from "react"
import plus from '../../assets/icons/plus.svg'
import './Controls.scss'

const Controls = () => {
    const [rovers, addRover] = useState([]);

    const updateRover = rover => addRover([...rovers, rover])

    return (
        <div className="controls">
            <h1 className="controls__title">Controls</h1>

            <div className="controls__rover">
                <div className="position">
                    <span>Pos: ( x, y, face )</span>
                    <input value="0 0" />
                </div>
            </div>

            <div className="controls__add">
                <img src={plus} />
            </div>
        </div>
    )
}

export default Controls;