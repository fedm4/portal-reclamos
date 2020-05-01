import React, { useContext, useState } from 'react';

import ConfirmacionReclamo from '../ConfirmacionReclamo';
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

const ReclamoForm = ({reclamoOpen, setReclamoOpen, restart, successModal}) => {
    const firebase = useContext(FirebaseContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const {reclamo, imagen, handleChange, handleChangeSelect, handleImagen, resetReclamo, saveReclamo} = useReclamo(firebase);
    const {tituloRef, descripcionRef, comunasRef, imagenRef} = useRefReclamo(currentIndex, restart);
    
    const closeModal = () => {
        setCurrentIndex(0);
        resetReclamo();
        setReclamoOpen(false);

    }
    const nextIndex = () => setCurrentIndex(currentIndex + 1);
    const previousIndex = () => setCurrentIndex(currentIndex - 1);
    const getTabIndex = index => index === currentIndex ? 1 : 0;
    const save = async (reclamo, imagen) => {
        const id = await saveReclamo(reclamo, imagen);
        closeModal();
        successModal(id);
    };

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
                        value={reclamo.titulo}
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
                        value={reclamo.descripcion}
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
                        value={reclamo.comuna}
                    />
                </FormAnimatedItem>
                <FormAnimatedItem itemIndex={3} currentIndex={currentIndex}>
                    <p className="form-item-description">
                        Por último subamos una imagen de referencia. Esta imagen no es necesaria pero es importante para ayudarle con su reclamo.
                    </p>

                    <InputFile
                        type="file"
                        name="imagen"
                        handleChange={handleImagen}
                        elRef={imagenRef}
                        currentIndex={currentIndex}
                        nextIndex={nextIndex}
                        previousIndex={previousIndex}
                        value={reclamo.imagen}
                        imagen={imagen}
                    />
                </FormAnimatedItem>
                <FormAnimatedItem itemIndex={4} currentIndex={currentIndex}>
                    <p className="form-item-description">
                        Por último, vamos a revisar los datos ingresados. Una vez confirmado, haga click en "Generar Reclamo" para continuar.
                    </p>
                    <ConfirmacionReclamo
                        className="white"
                        reclamo={reclamo}
                        imagen={imagen?URL.createObjectURL(imagen):null}
                    />
                    <InputButtons 
                        currentIndex={currentIndex}
                        previousIndex={previousIndex}
                        save={save}
                    />
                </FormAnimatedItem>
            </form>
        </FormModal>
    )
}

export default ReclamoForm;
