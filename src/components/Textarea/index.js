import React from 'react';
import './Textarea.scss';

const Textarea = ({children, handleChange, name}) => {
    return (
        <textarea
            className="textarea"
            name={name}
            onChange={handleChange}
        >
            {children}
        </textarea>
    )
}

export default Textarea;
