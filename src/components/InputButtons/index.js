import React from 'react';
import Button from '../Button';
import './InputButtons.scss';

const InputButtons = ({currentIndex, nextIndex, previousIndex, save}) => {
    return (
        <div className="reclamo-form-footer">
            {currentIndex===0?null:<Button handleClick={previousIndex}>Anterior</Button>}
            {
                currentIndex < 4
                ?
                <Button handleClick={nextIndex}>Siguiente</Button>
                :
                <Button handleClick={save}>Generar Reclamo</Button>
            }
        </div>
    );
};
export default InputButtons;