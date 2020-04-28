import React, { useContext, useReducer, useState } from 'react';

import Button from '../Button';
import FirebaseContext from '../../context/FirebaseContext';
import FormAnimatedItem from '../FormAnimatedItem';
import Input from '../Input';
import FormModal from '../FormModal';
import Reclamo from '../../models/Reclamo';
import Select from '../Select';
import Textarea from '../Textarea';

import './ReclamoForm.scss';

/**
 * State contiene reclamo (tipo Reclamo)
 * e imagen de tipo File.
 */
const reducer = (state, action) => {
    const reclamo = {...state.reclamo};
    switch(action.type) {
        case "changeInput":
            reclamo[action.key] = action.value;
            return {...state, reclamo };
        case "changeImg":
            reclamo['imagen'] = action.imagen.name;
            return { reclamo, imagen: action.imagen };
        default:
            return state;
    }
};

const getComunasOptions = () => {
    const comunas = [];
    for(let i = 1; i <= 15; i++) {
        const nombre = `Comuna ${i}`;
        comunas.push({label: nombre, value: nombre});
    }
    return comunas;
};

const ReclamoForm = ({reclamoOpen, setReclamoOpen}) => {
    const firebase = useContext(FirebaseContext);
    const [state, dispatch] = useReducer(reducer, {reclamo: new Reclamo() });
    

    const [currentIndex, setCurrentIndex] = useState(0);

    const closeModal = () => setReclamoOpen(false);

    /**
     * Función Change para inputs excepto file
     * @param {Event} e
     */
    const handleChange = e => {
        dispatch({
        type: "changeInput",
        key: e.target.name,
        value: e.target.value
        });
    };

    /**
     * Functión change para File
     * @param {Event} e 
     */
    const handleImagen = e => {
        dispatch({
        type: "changeImg",
        imagen: e.target.files[0]
        });
    };

    /**
     * Toma reclamo e imagen de state y los pasa a firebase para 
     * generar el reclamo y guardar la img en storage.
     * Muestra modal con nuevo ID a modo de mensaje 
     * de éxito al guardar todo.
     */
    const doIt = async ()=>{
        try {
        const id = await firebase.generarReclamo(state.reclamo, state.imagen);
        console.log(id);
        //TODO: Mostrar modal con ID
        }catch (err) {
        console.log(err);
        //TODO: Handle error
        }
    };

    const footerChildren = () => {
        return (
            <div>
                {currentIndex===0?null:<Button handleClick={() => setCurrentIndex(currentIndex - 1)}>Anterior</Button>}
                {
                    currentIndex < 4
                    ?
                    <Button handleClick={() => setCurrentIndex(currentIndex+1)}>Siguiente</Button>
                    :
                    <Button handleClick={doIt}>Save!</Button>
                }
            </div>
        );
    };

    return (
        <FormModal
            footerChildren={footerChildren}
            showModal={reclamoOpen}
            closeModal={closeModal}
            title="Nuevo Reclamo"
        >
            <form className="reclamo-form">
                <FormAnimatedItem itemIndex={0} currentIndex={currentIndex}>
                    <Input type="text" name="titulo" onChange={handleChange} />
                </FormAnimatedItem>
                <FormAnimatedItem itemIndex={1} currentIndex={currentIndex}>
                    <Textarea name="descripcion" onChange={handleChange} />
                </FormAnimatedItem>
                <FormAnimatedItem itemIndex={2} currentIndex={currentIndex}>
                    <Select options={getComunasOptions()} onChange={handleChange} />
                </FormAnimatedItem>
                <FormAnimatedItem itemIndex={3} currentIndex={currentIndex}>
                    <Input type="file" name="imagen" onChange={handleImagen} />
                </FormAnimatedItem>
                <FormAnimatedItem itemIndex={4} currentIndex={currentIndex}>
                    <div>Listita con datos ingrersados</div>
                </FormAnimatedItem>
            </form>
        </FormModal>
    )
}

export default ReclamoForm;
