import React from 'react'
import './Icon.scss'

const Icon = ({ children, ...rest }) => (
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
        {...rest}
    >
        {children}
    </svg>
)

export default Icon