import React from 'react';
import './ConfirmacionReclamo.scss';

const ConfirmacionReclamo = ({reclamo, imagen}) => {
    return (
        <ul className="confirmacion-reclamo">
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
                <li>Imagen: <img src={URL.createObjectURL(imagen)} alt="Preview" /></li>
            }
        </ul>
    )
}

export default ConfirmacionReclamo;
