import React, {useContext, useEffect, useState} from 'react';
import ReclamoForm from './../../components/ReclamoForm';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Table from '../../components/Table';
import Td from '../../components/Td';

import FirebaseContext from './../../context/FirebaseContext';

const Main = () => {
    const firebase = useContext(FirebaseContext);
    const [reclamoOpen, setReclamoOpen] = useState(false);
    const [successModal, setSuccessModal] = useState({showModal: false, id: null});
    const [restart, setRestart] = useState(false);
    const [reclamos, setReclamos] = useState([]);
    const [_reclamos, set_Reclamos] = useState({});
    const handleClick = () => {
        setReclamoOpen(true);
        setRestart(!restart);
    };
    const openSuccessModal = (id) => {
        setSuccessModal({showModal: true, id});
    };
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
        <main>
            <section className="panel">
                <header className="panel-header">
                    <h2>Reclamos</h2>
                    <Button handleClick={handleClick}>Nuevo Reclamo</Button>
                </header>
                <Table columns={columns} tableName="reclamos">
                    {reclamos.map((row, index) => (
                        <tr key={`reclamos-${index}`}>
                            <Td hideable={true}> {row.id} </Td>
                            <Td> {row.titulo}</Td>
                            <Td hideable={true}>{row.descripcion}</Td>
                            <Td hideable={true}>{row.comuna}</Td>
                            <Td hideable={true}>
                                <img src={row.imagen} alt="Reclamo" />
                            </Td>
                        </tr>
                    ))}
                </Table>
            </section>
            <ReclamoForm
                reclamoOpen={reclamoOpen}
                setReclamoOpen={setReclamoOpen}
                restart={restart}
                successModal={openSuccessModal}
            />
            <Modal
                title="Nuevo Reclamo"
                showModal={successModal.showModal}
                closeModal={() => {setSuccessModal({...successModal, showModal: false})}}
            >
                <p>Su nuevo reclamo se generó con ID {successModal.id}</p>
            </Modal>
        </main>
    )
}

export default Main;
