import React, {useState} from 'react'
import Button from '../Button';
import InputButtons from '../InputButtons';
import './InputFile.scss';

const InputFile = ({handleChange, name, elRef, currentIndex, previousIndex, nextIndex}) => {
    const [image, setImage] = useState();
    const onChange = e => {
        handleChange(e);
        setImage(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <div>
            <Button type="button">
                <label>
                    <input id="input-file" className="input-file" type="file" onChange={onChange} name={name} ref={elRef} />
                    Selecconar Imagen
                </label>
            </Button>
            {
                !image ? 
                null
                :
                <figure className="image-preview">
                    <img src={image} alt="Preview" />
                </figure>
            }
            <InputButtons 
                currentIndex={currentIndex}
                previousIndex={previousIndex}
                nextIndex={nextIndex}
            />
        </div>
    );
}

export default InputFile;
