import React, {useState} from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import InputButtons from './../InputButtons';
import InputUnderline from './../InputUnderline';

import './Textarea.scss';

const Textarea = ({children, handleChange, name, elRef, currentIndex, previousIndex, nextIndex,value }) => {
    const [showNext, setShowNext] = useState(value.length > 3 ? true: false);

    const handleKeyDown = e => {
        if(e.key==='Tab' ||
            (e.key === 'Enter' && e.ctrlKey)
        ) {
            e.preventDefault();
            nextIndex();
        }
    }
    const onChange = e => {
        handleChange(e);
        setShowNext(e.target.value.length > 3 ? true: false);
    }
    return (
        <label aria-label={name}>
            <div className="textarea-wrapper">
                <TextareaAutosize
                    className="textarea"
                    name={name}
                    onChange={onChange}
                    inputRef={elRef}
                    defaultValue={value}
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
                showNext={showNext}
                helperText="Presiona Control+Enter para continuar"
            />
        </label>
    )
}

export default Textarea;
