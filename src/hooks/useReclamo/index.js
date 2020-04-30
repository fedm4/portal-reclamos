import {useReducer} from 'react';
import Reclamo from '../../models/Reclamo';

const useReclamo = (firebase) => {

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
            case "reset":
                return {reclamo: new Reclamo(), imagen: null};
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, {reclamo: new Reclamo(), imagen: null });

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
    const handleChangeSelect = data => {
        dispatch({
            type: "changeInput",
            key: data.name,
            value: data.value
        });
    }

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
     * Función para resetear el state
     * @param {Event} e 
     */
    const resetReclamo = e => {
        dispatch({type: "reset"});
    };


    /**
     * Toma reclamo e imagen de state y los pasa a firebase para 
     * generar el reclamo y guardar la img en storage.
     * Muestra modal con nuevo ID a modo de mensaje 
     * de éxito al guardar todo.
     */
    const saveReclamo = async ()=>{
        try {
        const id = await firebase.generarReclamo(state.reclamo, state.imagen);
        return id;
        }catch (err) {
        console.log(err);
        //TODO: Handle error
        }
    };

    return {
        reclamo: state.reclamo,
        imagen: state.imagen,
        handleChange,
        handleChangeSelect,
        handleImagen,
        resetReclamo,
        saveReclamo
    }

};

export default useReclamo;