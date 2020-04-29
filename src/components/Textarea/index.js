import React from 'react';
import './Textarea.scss';

const Textarea = ({children, handleChange, name, input, onEnter}) => {
    const handleKeyDown = e => {
        if(e.key==='Tab') {
            e.preventDefault();
            onEnter();
        }
    }
    const handleKeyPress = e => {
        if(e.key === 'Enter' && e.key === 'Ctrl') {
            onEnter();
        }
    }
    return (
        <textarea
            className="textarea"
            name={name}
            onChange={handleChange}
            ref={input}
            onKeyDown={handleKeyDown}
        >
            {children}
        </textarea>
    )
}

export default Textarea;
