import React, {useContext, useEffect, useState} from 'react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

import Button from '../Button';
import ConfirmacionReclamo from '../ConfirmacionReclamo';
import Modal from '../Modal';
import Table from '../Table';
import Td from '../Td';
import FirebaseContext from './../../context/FirebaseContext';
import Reclamo from '../../models/Reclamo';

import './ReclamoTable.scss';

const ReclamoTable = () => {
    const firebase = useContext(FirebaseContext);
    const skeletonCount = [0,1,2,3,4];
    
    const [reclamos, setReclamos] = useState([]);
    const [_reclamos, set_Reclamos] = useState({});
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [detailsData, setDetailsData] = useState({reclamo: new Reclamo(), imagen: null});
    const [showImageModal, setShowImageModal] = useState(false);
    
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

    const openDetailsModal = (index) => {
        setDetailsData({
            reclamo: reclamos[index],
            imagen: reclamos[index].imagen
        })
        setShowDetailsModal(true);
    }

    const openImagenModal = (e, index) => {
        e.preventDefault();
        setDetailsData({
            ...detailsData,
            imagen: reclamos[index].imagen
        })
        setShowImageModal(true);
    }

    useEffect(()=>{
        firebase.getReclamos(set_Reclamos);
    }, []);
    useEffect(() => {
        parseData();
    }, [_reclamos]);
    

    return (
        <div>
            <SkeletonTheme color="#999" highlightColor="#AAA">
                <Table columns={columns} tableName="reclamos">
                    {
                        reclamos.length ?
                        reclamos.map((row, index) => (
                            <tr key={`reclamos-${index}`}>
                                <Td hideable={true}> {row.id} </Td>
                                <Td>
                                    {row.titulo}
                                    <div>
                                        <Button className="view-detail" handleClick={() => openDetailsModal(index)}>Ver detalle</Button>
                                    </div>
                                </Td>
                                <Td hideable={true}>{row.descripcion}</Td>
                                <Td hideable={true}>{row.comuna}</Td>
                                <Td hideable={true}>
                                    {
                                        !row.imagen ? 
                                        <span>N/A</span> :
                                        <div className="reclamo-img-container">
                                            <a href="#" onClick={e => openImagenModal(e, index)} >
                                                <img src={row.imagen} alt="Reclamo" />
                                            </a>
                                        </div>
                                    }
                                </Td>
                            </tr>
                        ))
                        :
                        skeletonCount.map((item, idxsk) => (
                            <tr key={`skeleton-reclamo-${idxsk}`}>
                                <Td hideable={true}><Skeleton /></Td>
                                <Td style={{display: 'block'}}><Skeleton /></Td>
                                <Td hideable={true}><Skeleton /></Td>
                                <Td hideable={true}><Skeleton /></Td>
                                <Td hideable={true}><Skeleton /></Td>
                            </tr>
                        ))
                        
                    }
                </Table>
            </SkeletonTheme>
            <Modal
                title={`Reclamo ${detailsData.reclamo.id}`}
                showModal={showDetailsModal}
                closeModal={() => setShowDetailsModal(false)}
            >
                <ConfirmacionReclamo
                    reclamo={detailsData.reclamo}
                    imagen={detailsData.imagen}
                />
            </Modal>
            <Modal
                className="modal-imagen"
                title={`Imagen del Reclamo`}
                showModal={showImageModal}
                customTop={20}
                closeModal={() => setShowImageModal(false)}
            >
                <img src={detailsData.imagen} alt="Foto de Reclamo" />
            </Modal>
        </div>
    );
}

export default ReclamoTable;
