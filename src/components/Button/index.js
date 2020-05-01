import React from 'react';
import './Button.scss';

const Button = ({children,className, handleClick}) => {
    return (
        <button
            className={`${className} button`}
            type="button"
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default Button;
