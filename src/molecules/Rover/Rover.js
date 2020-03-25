import React from 'react'
import plus from '../../assets/icons/plus.svg'
import Input from '../../atoms/Input'
import './Rover.scss'
import Icon from '../Icon/Icon'

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
 * Render close icon
 * @param {func} onDelete - delete action on click
 */
const CloseIcon = ({ onDelete }) => (
    <div className="rover__icon rover__icon--close">
        <Icon
            onClick={() => onDelete()}
        >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </Icon>
    </div>
)

/**
 * Render left icon component
 */
const LeftIcon = () => (
    <Icon>
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
    </Icon>
)

/**
 * Render move icon component
 */
const MoveIcon = () => (
    <Icon stroke="#d06262">
        <circle cx="12" cy="12" r="2" />
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />

    </Icon>
)

/**
 * Render right icon component
 */
const RightIcon = () => (
    <Icon>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </Icon>
)

/**
 * Seperate Left
 * @param {*} param0 
 */
const CTA = ({ onClick, children }) => (
    <div className="rover__cta-item" onClick={() => onClick()}>
        {children}
    </div>
)

/**
 * Render Rover Component
 * @param {Number} x - x cordinate
 * @param {Number} y - y cordinate
 * @param {String} face - current face
 * @param {String} path - set of movements
 * @param {Array} mars - (x, y) coordinates of mars
 * @param {Function} onChange - func call on change
 * @param {Function} onDelete - func call on delete
 */
const Rover = ({ x, y, face, path, mars, onChange, onDelete }) => (
    <div className="rover">
        <CloseIcon onDelete={onDelete} />

        <div className="rover__pos-container">
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
            <div className="rover__cta-container">
                <CTA
                    onClick={() => onChange({
                        x,
                        y,
                        face: LEFT[face],
                        path
                    })}
                >
                    <LeftIcon />
                </CTA>
                <CTA
                    onClick={() => {
                        let afterMove = move(x, y, face, mars)

                        onChange({
                            x: afterMove[0],
                            y: afterMove[1],
                            face,
                            path: path + face
                        })
                    }}
                >
                    <MoveIcon />
                </CTA>
                <CTA
                    onClick={() => onChange({
                        x,
                        y,
                        face: RIGHT[face],
                        path
                    })}
                >
                    <RightIcon />
                </CTA>
            </div>
        </div>
        <div className="rover__path">
            <Input value={path} readOnly placeholder="Command path" />
        </div>
    </div>
)

export default Rover