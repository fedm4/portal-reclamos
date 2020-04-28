import React from 'react';
import './Input.scss';

const Input = ({handleChange, name, type}) => {
    return (
        <input className="input" type={type} name={name} onChange={handleChange} />
    )
}

export default Input;
