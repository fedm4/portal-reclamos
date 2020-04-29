import React from 'react';
import Button from '../Button';

const ReclamoFormFooter = ({currentIndex, nextIndex, previousIndex, save}) => {
    return (
        <div className="reclamo-form-footer">
            {currentIndex===0?null:<Button handleClick={previousIndex}>Anterior</Button>}
            {
                currentIndex < 4
                ?
                <Button handleClick={nextIndex}>Siguiente</Button>
                :
                <Button handleClick={save}>Guardar</Button>
            }
        </div>
    );
};
export default ReclamoFormFooter;