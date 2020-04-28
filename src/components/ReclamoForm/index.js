import React, { useContext, useReducer } from 'react';
import FirebaseContext from '../../context/FirebaseContext';
import Button from '../Button';
import Input from '../Input';
import Textarea from '../Textarea';
import Modal from '../Modal';
import Reclamo from '../../models/Reclamo';

import './ReclamoForm.scss';
import Select from '../Select';

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
            <Button handleClick={closeModal}>Close</Button>
        );
    };

    return (
        <Modal
            footerChildren={footerChildren}
            showModal={reclamoOpen}
            closeModal={closeModal}
            title="Nuevo Reclamo"
            width={550}
        >
            <form className="reclamo-form">
                <Input type="text" name="titulo" onChange={handleChange} />
                <Textarea name="descripcion" onChange={handleChange} />
                <Select options={getComunasOptions()} onChange={handleChange} />
                <Input type="file" name="imagen" onChange={handleImagen} />
                <Button handleClick={doIt}>Save!</Button>
            </form>
        </Modal>
    )
}

export default ReclamoForm;
