import React from 'react'

const InputFile = ({handleChange, name, input}) => {
    return (
        <input type="file" onChange={handleChange} name={name} ref={input} />
    );
}

export default InputFile;
