import {useRef, useEffect} from 'react';

/**
 * Refs para cada input de Reclamo de forma de hacer
 * la navegación en el form más dinámica y cómoda, dando
 * focus en cada paso.
 */
const useRefReclamo = (currentIndex, restart) => {
    const tituloRef = useRef();
    const descripcionRef = useRef();
    const comunasRef = useRef();
    const imagenRef = useRef();

    useEffect(() => {
        tituloRef.current.focus();
    }, [restart, tituloRef]);
    useEffect(()=> {
        /**
         * Setea focus con delay de 0.5s para compensar
         * la animación.
         */
        setTimeout(() => {
            switch(currentIndex) {
                case 0:
                    tituloRef.current.focus();
                    break;
                case 1:
                    descripcionRef.current.focus();
                    break;
                case 2:
                    comunasRef.current.focus();
                    break;
                case 3:
                    imagenRef.current.focus();
                    break;
                default:
                    break;
            }
        }, 500);
    }, [currentIndex, tituloRef, descripcionRef, comunasRef, imagenRef]);
    
    return {
        tituloRef,
        descripcionRef,
        comunasRef,
        imagenRef
    }
};

export default useRefReclamo;
