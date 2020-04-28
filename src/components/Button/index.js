import React from 'react';
import './Button.scss';

const Button = ({children, handleClick}) => {
    return (
        <button
            type="button"
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default Button;
