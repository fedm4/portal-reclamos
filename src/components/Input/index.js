import React from 'react';
import './Input.scss';
import InputButtons from './../InputButtons';
import InputUnderline from './../InputUnderline';

const Input = ({handleChange, value, name, type, label, elRef, currentIndex, nextIndex}) => {
    const handleKeyDown = e => {
        if(e.key==='Tab' || e.key === 'Enter') {
            e.preventDefault();
            nextIndex();
        }
    }
    return (
        <div>
            <label className="input-label">
                <input
                    className="input"
                    type={type}
                    name={name}
                    placeholder={label}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    value={value}
                    ref={elRef}
                />
                <InputUnderline />
            </label>
            <InputButtons
                currentIndex={currentIndex}
                nextIndex={nextIndex}
            />
        </div>
    )
}

export default Input;
