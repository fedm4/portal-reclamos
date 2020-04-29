import React, { useContext, useState } from 'react';

import FirebaseContext from '../../context/FirebaseContext';
import FormAnimatedItem from '../FormAnimatedItem';
import Input from '../Input';
import FormModal from '../FormModal';
import ReclamoFormFooter from '../ReclamoFormFooter';
import Select from '../Select';
import Textarea from '../Textarea';
import useReclamo from '../../hooks/useReclamo';
import useRefReclamo from '../../hooks/useRefReclamo';

import './ReclamoForm.scss';

const getComunasOptions = () => {
    const comunas = [];
    for(let i = 1; i <= 15; i++) {
        const nombre = `Comuna ${i}`;
        comunas.push({label: nombre, value: nombre});
    }
    return comunas;
};

const ReclamoForm = ({reclamoOpen, setReclamoOpen, restart}) => {
    const firebase = useContext(FirebaseContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const {handleChange, handleChangeSelect, handleImagen, saveReclamo} = useReclamo(firebase);
    const {tituloInput, descripcionInput, comunasInput, imagenInput} = useRefReclamo(currentIndex);
    
    const closeModal = () => setReclamoOpen(false);
    const nextIndex = () => setCurrentIndex(currentIndex + 1);
    const previousIndex = () => setCurrentIndex(currentIndex - 1);

    return (
        <FormModal
            showModal={reclamoOpen}
            closeModal={closeModal}
            title="Nuevo Reclamo"
        >
            <form className="reclamo-form">
                <FormAnimatedItem itemIndex={0} currentIndex={currentIndex}>
                    <p className="form-item-description">Comencemos a crear su reclamo. Empecemos por darle título</p>
                    <Input
                        type="text"
                        name="titulo"
                        label="Título"
                        handleChange={handleChange}
                        onEnter={nextIndex}
                        input={tituloInput} />
                </FormAnimatedItem>
                <FormAnimatedItem itemIndex={1} currentIndex={currentIndex}>
                    <p className="form-item-description"></p>
                    <Textarea
                        name="descripcion"
                        handleChange={handleChange}
                        onEnter={nextIndex}
                        input={descripcionInput}
                    />
                </FormAnimatedItem>
                <FormAnimatedItem itemIndex={2} currentIndex={currentIndex}>
                    <p className="form-item-description"></p>
                    <Select
                        name="comuna"
                        options={getComunasOptions()}
                        handleChange={handleChangeSelect}
                        onEnter={nextIndex}
                        input={comunasInput}
                    />
                </FormAnimatedItem>
                <FormAnimatedItem itemIndex={3} currentIndex={currentIndex}>
                    <p className="form-item-description"></p>
                    <Input type="file" name="imagen" handleChange={handleImagen} input={imagenInput} />
                </FormAnimatedItem>
                <FormAnimatedItem itemIndex={4} currentIndex={currentIndex}>
                    <p className="form-item-description"></p>
                    <div>Listita con datos ingrersados</div>
                </FormAnimatedItem>
            </form>
            <ReclamoFormFooter
                currentIndex={currentIndex}
                previousIndex={previousIndex}
                nextIndex={nextIndex}
                save={saveReclamo}
            />
        </FormModal>
    )
}

export default ReclamoForm;
