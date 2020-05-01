import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import InputButtons from './../InputButtons';
import InputUnderline from './../InputUnderline';

import './Textarea.scss';

const Textarea = ({children, handleChange, name, elRef, currentIndex, previousIndex, nextIndex, }) => {
    const handleKeyDown = e => {
        if(e.key==='Tab' ||
            (e.key === 'Enter' && e.ctrlKey)
        ) {
            e.preventDefault();
            nextIndex();
        }
    }

    return (
        <label aria-label={name}>
            <div className="textarea-wrapper">
                <TextareaAutosize
                    className="textarea"
                    name={name}
                    onChange={handleChange}
                    inputRef={elRef}
                    onKeyDown={handleKeyDown}
                >
                    {children}
                </TextareaAutosize>
                <InputUnderline />
            </div>
            <InputButtons 
                currentIndex={currentIndex}
                previousIndex={previousIndex}
                nextIndex={nextIndex}
            />
        </label>
    )
}

export default Textarea;
