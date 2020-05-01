import React, {useState} from 'react';
import './Input.scss';
import InputButtons from './../InputButtons';
import InputUnderline from './../InputUnderline';

const Input = ({handleChange, value, name, type, label, elRef, currentIndex, nextIndex}) => {
    const [showNext, setShowNext] = useState(value.length > 3 ? true: false);
    const handleKeyDown = e => {
        if(e.key==='Tab' || e.key === 'Enter') {
            e.preventDefault();
            nextIndex();
        }
    }
    const onChange = e => {
        handleChange(e);
        setShowNext(e.target.value.length > 3 ? true: false);
    }
    return (
        <div>
            <label aria-label={label} className="input-label">
                <input
                    className="input"
                    type={type}
                    name={name}
                    placeholder={label}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                    value={value}
                    ref={elRef}
                />
                <InputUnderline />
            </label>
            <InputButtons
                currentIndex={currentIndex}
                nextIndex={nextIndex}
                showNext={showNext}
                helperText="Presiona Enter para continuar"
            />
        </div>
    )
}

export default Input;
