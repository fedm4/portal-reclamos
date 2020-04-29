import {useRef, useEffect} from 'react';

const useRefReclamo = (currentIndex, restart) => {
    const tituloRef = useRef();
    const descripcionRef = useRef();
    const comunasRef = useRef();
    const imagenRef = useRef();

    /*useEffect(() => {
        tituloRef.current.focus();
    }, [restart, tituloRef]);
    useEffect(()=> {
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
    }, [currentIndex, tituloRef, descripcionRef, comunasRef, imagenRef]);*/
    
    return {
        tituloRef,
        descripcionRef,
        comunasRef,
        imagenRef
    }
};

export default useRefReclamo;
