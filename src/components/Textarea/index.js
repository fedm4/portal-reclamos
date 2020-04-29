import React from 'react';
import './Textarea.scss';

const Textarea = ({children, handleChange, name, input}) => {
    return (
        <textarea
            className="textarea"
            name={name}
            onChange={handleChange}
            ref={input}
        >
            {children}
        </textarea>
    )
}

export default Textarea;
