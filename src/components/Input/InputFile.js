import React from 'react'

const InputFile = ({handleChange, name}) => {
    return (
        <input type="file" onChange={handleChange} name={name}/>
    );
}

export default InputFile;
