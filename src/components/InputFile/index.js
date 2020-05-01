import React, {useEffect, useState} from 'react'
import Button from '../Button';
import InputButtons from '../InputButtons';
import './InputFile.scss';

const InputFile = ({handleChange, name, elRef, currentIndex, previousIndex, nextIndex, imagen}) => {
    const [image, setImage] = useState();
    const onChange = e => {
        handleChange(e);
        setImage(URL.createObjectURL(e.target.files[0]));
    }
    useEffect(() => {
        if(imagen) setImage(URL.createObjectURL(imagen));
    }, [])
    return (
        <div>
            <Button type="button">
                <label>
                    <input
                        id="input-file"
                        className="input-file"
                        type="file"
                        onChange={onChange}
                        name={name}
                        ref={elRef}
                    />
                    Seleccionar
                </label>
            </Button>
            <figure className="image-preview" style={!image ? {height: "400px"} : null}>
                {
                    !image ? 
                    null
                    :
                    <img src={image} alt="Preview" />
                    
                }
            </figure>
            <InputButtons 
                currentIndex={currentIndex}
                previousIndex={previousIndex}
                nextIndex={nextIndex}
                showNext={true}
            />
        </div>
    );
}

export default InputFile;
