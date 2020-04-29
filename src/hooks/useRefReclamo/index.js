import {useRef, useEffect} from 'react';

const useRefReclamo = ({currentIndex, restart}) => {
    const tituloInput = useRef();
    const descripcionInput = useRef();
    const comunasInput = useRef();
    const imagenInput = useRef();

    useEffect(() => {
        tituloInput.current.focus();
    }, [restart]);
    useEffect(()=> {
        switch(currentIndex) {
            case 0:
                tituloInput.current.focus();
                break;
            case 1:
                descripcionInput.current.focus();
                break;
            default:
                break;
        }
    }, [currentIndex]);
    
    return {
        tituloInput,
        descripcionInput,
        comunasInput,
        imagenInput
    }
};

export default useRefReclamo;
