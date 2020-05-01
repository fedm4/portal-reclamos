import React, {useContext, useEffect, useState} from 'react';
import Button from '../Button';
import Table from '../Table';
import Td from '../Td';
import FirebaseContext from './../../context/FirebaseContext';

import './ReclamoTable.scss';

const ReclamoTable = () => {
    const firebase = useContext(FirebaseContext);

    const [reclamos, setReclamos] = useState([]);
    const [_reclamos, set_Reclamos] = useState({});
    
    const columns = [
        {name: 'Id', hideable: true},
        {name: 'Título', hideable: false},
        {name: 'Descripción', hideable: true},
        {name: 'Comuna', hideable: true},
        {name: 'Imagen', hideable: true},
    ];

    const parseData = async () => {
        const data = [];
        for(let reclamoId in _reclamos) {
            const imagen = await firebase.getImage(_reclamos[reclamoId].imagen);
            data.push({
                id: reclamoId,
                titulo: _reclamos[reclamoId].titulo,
                descripcion: _reclamos[reclamoId].descripcion,
                comuna: _reclamos[reclamoId].comuna,
                imagen
            });
        }
        setReclamos(data);
    };
    useEffect(()=>{
        firebase.getReclamos(set_Reclamos);
    }, []);
    useEffect(() => {
        parseData();
    }, [_reclamos]);
    

    return (
        <div>
            <Table columns={columns} tableName="reclamos">
                {reclamos.map((row, index) => (
                    <tr key={`reclamos-${index}`}>
                        <Td hideable={true}> {row.id} </Td>
                        <Td>
                            {row.titulo}
                            <div>
                                <Button className="view-detail" handleClick={() => {}}>Ver detalle</Button>
                            </div>
                        </Td>
                        <Td hideable={true}>{row.descripcion}</Td>
                        <Td hideable={true}>{row.comuna}</Td>
                        <Td hideable={true}>
                            {
                                !row.imagen ? 
                                <span>N/A</span> :
                                <div className="reclamo-img-container">
                                    <img src={row.imagen} alt="Reclamo" />
                                </div>
                            }
                        </Td>
                    </tr>
                ))}
            </Table>
        </div>
    );
}

export default ReclamoTable;
