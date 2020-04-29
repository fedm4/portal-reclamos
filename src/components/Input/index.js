import React from 'react';
import InputFile from './InputFile';
import './Input.scss';

const Input = ({handleChange, name, type, label, onEnter, input}) => {
    if(type==="file") return (<InputFile handleChange={handleChange} name={name} input={input}/>);
    const handleKeyDown = e => {
        if(e.key==='Tab') {
            e.preventDefault();
            onEnter();
        }
    }
    const handleKeyPress = e => {
        if(e.key === 'Enter') {
            onEnter();
        }
    }
    return (
        <label className="input-label">
            <input
                className="input"
                type={type}
                name={name}
                placeholder={label}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                onKeyDown={handleKeyDown}
                ref={input}
            />
            <span className="input-underline"></span>
        </label>
    )
}

export default Input;
