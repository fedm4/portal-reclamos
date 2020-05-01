import React from 'react';
import './ConfirmacionReclamo.scss';

const ConfirmacionReclamo = ({className, reclamo, imagen}) => {
    return (
        <ul className={`${className} confirmacion-reclamo`}>
            {
                !reclamo.id ?
                null
                :
                <li>ID: {reclamo.id}</li>
            }
            <li>Título: {reclamo.titulo}</li>
            <li>
                Descripcion: 
                <div>{reclamo.descripcion}</div>
            </li>
            <li>Comuna: {reclamo.comuna}</li>
            {
                !imagen ? 
                null
                :
                <li>Imagen: <img src={imagen} alt="Preview" /></li>
            }
        </ul>
    )
}

export default ConfirmacionReclamo;
