import React, { useContext, useState } from 'react';

import FirebaseContext from '../../context/FirebaseContext';
import FormAnimatedItem from '../FormAnimatedItem';
import Input from '../Input';
import InputFile from '../InputFile';
import FormModal from '../FormModal';
import Select from '../Select';
import Textarea from '../Textarea';
import useReclamo from '../../hooks/useReclamo';
import useRefReclamo from '../../hooks/useRefReclamo';

import './ReclamoForm.scss';
import InputButtons from '../InputButtons';

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
    const {tituloRef, descripcionRef, comunasRef, imagenRef} = useRefReclamo(currentIndex);
    
    const closeModal = () => setReclamoOpen(false);
    const nextIndex = () => setCurrentIndex(currentIndex + 1);
    const previousIndex = () => setCurrentIndex(currentIndex - 1);
    const getTabIndex = index => index === currentIndex ? 1 : 0;

    return (
        <FormModal
            showModal={reclamoOpen}
            closeModal={closeModal}
            title="Nuevo Reclamo"
        >
            <form className="reclamo-form">
                <FormAnimatedItem itemIndex={0} currentIndex={currentIndex}>
                    <p className="form-item-description">Comencemos a crear su reclamo. Empecemos por darle título.</p>
                    <Input
                        type="text"
                        name="titulo"
                        label="Título"
                        handleChange={handleChange}
                        tabIndex={getTabIndex()}
                        elRef={tituloRef} 
                        currentIndex={currentIndex}
                        nextIndex={nextIndex}
                    />
                </FormAnimatedItem>
                <FormAnimatedItem itemIndex={1} currentIndex={currentIndex}>
                    <p className="form-item-description">
                        Describa su reclamo lo más detallado posible.
                    </p>
                    <Textarea
                        name="descripcion"
                        handleChange={handleChange}
                        tabIndex={getTabIndex(1)}
                        elRef={descripcionRef}
                        currentIndex={currentIndex}
                        nextIndex={nextIndex}
                        previousIndex={previousIndex}
                    />
                </FormAnimatedItem>
                <FormAnimatedItem itemIndex={2} currentIndex={currentIndex}>
                    <p className="form-item-description">
                        Ahora busquemos la comuna que coresponde a su reclamo. Recuerde que para ver la lista de comunas y zonas correspondientes puede ingresar <a href="https://www.buenosaires.gob.ar/comunas">aquí</a>.
                    </p>
                    <Select
                        name="comuna"
                        options={getComunasOptions()}
                        handleChange={handleChangeSelect}
                        elRef={comunasRef}
                        currentIndex={currentIndex}
                        nextIndex={nextIndex}
                        previousIndex={previousIndex}
                    />
                </FormAnimatedItem>
                <FormAnimatedItem itemIndex={3} currentIndex={currentIndex}>
                    <p className="form-item-description"></p>
                    <InputFile
                        type="file"
                        name="imagen"
                        handleChange={handleImagen}
                        elRef={imagenRef}
                        currentIndex={currentIndex}
                        nextIndex={nextIndex}
                        previousIndex={previousIndex}
                    />
                </FormAnimatedItem>
                <FormAnimatedItem itemIndex={4} currentIndex={currentIndex}>
                    <p className="form-item-description"></p>
                    <div>Listita con datos ingrersados</div>
                    <InputButtons 
                        currentIndex={currentIndex}
                        previousIndex={previousIndex}
                        save={saveReclamo}
                    />
                </FormAnimatedItem>
            </form>
        </FormModal>
    )
}

export default ReclamoForm;
