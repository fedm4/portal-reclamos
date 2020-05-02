import React from 'react';
import './ConfirmacionReclamo.scss';

const ConfirmacionReclamo = ({className, reclamo, imagen}) => {
    return (
        <ul className={`${className} confirmacion-reclamo`}>
            {
                !reclamo.id ?
                null
                :
                <li><strong>ID:</strong> {reclamo.id}</li>
            }
            <li><strong>Título:</strong> {reclamo.titulo}</li>
            <li>
                <strong>Descripcion</strong>: 
                <div>{reclamo.descripcion}</div>
            </li>
            <li><strong>Comuna:</strong> {reclamo.comuna}</li>
            {
                !imagen ? 
                null
                :
                <li><strong>Imagen:</strong> <img src={imagen} alt="Preview" /></li>
            }
        </ul>
    )
}

export default ConfirmacionReclamo;
