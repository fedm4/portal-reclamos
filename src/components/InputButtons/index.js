import React from 'react';
import Button from '../Button';
import './InputButtons.scss';

const InputButtons = ({currentIndex, nextIndex, previousIndex, save, showNext, helperText}) => {
    return (
        <div className="reclamo-form-footer">
            {currentIndex===0?null:<Button handleClick={previousIndex}>Anterior</Button>}
            {
                currentIndex < 4
                ?
                    showNext ? 
                    <Button handleClick={nextIndex}>Siguiente</Button>
                    : null
                :
                <Button handleClick={save}>Generar Reclamo</Button>
            }
            {
                showNext ? 
                <span className="helper-text">
                    {helperText}
                </span>
                :
                null
            }
        </div>
    );
};
export default InputButtons;