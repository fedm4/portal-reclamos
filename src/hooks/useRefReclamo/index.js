import {createRef, useRef, useEffect} from 'react';

const useRefReclamo = (currentIndex, restart) => {
    const tituloInput = createRef();
    const descripcionInput = createRef();
    const comunasInput = createRef();
    const imagenInput = createRef();

    useEffect(() => {
        tituloInput.current.focus();
    }, [restart, tituloInput]);
    useEffect(()=> {
        switch(currentIndex) {
            case 0:
                tituloInput.current.focus();
                break;
            case 1:
                descripcionInput.current.focus();
                break;
            case 2:
                comunasInput.current.focus();
                break;
            case 3:
                imagenInput.current.focus();
                break;
            default:
                break;
        }
    }, [currentIndex, tituloInput, descripcionInput, comunasInput, imagenInput]);
    
    return {
        tituloInput,
        descripcionInput,
        comunasInput,
        imagenInput
    }
};

export default useRefReclamo;
