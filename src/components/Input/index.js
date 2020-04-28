import React from 'react';
import InputFile from './InputFile';
import './Input.scss';

const Input = ({handleChange, name, type, placeholder}) => {
    if(type==="file") return (<InputFile handleChange={handleChange} name={name}/>)
    return (
        <input className="input" type={type} name={name} onChange={handleChange} />
    )
}

export default Input;
