import React, {useState} from 'react';
import ReclamoForm from './../../components/ReclamoForm';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

const Main = () => {
    const [reclamoOpen, setReclamoOpen] = useState(false);
    const [successModal, setSuccessModal] = useState({showModal: false, id: null});
    const [restart, setRestart] = useState(false);
    const handleClick = () => {
        setReclamoOpen(true);
        setRestart(!restart);
    };
    const openSuccessModal = (id) => {
        setSuccessModal({showModal: true, id});
    };
    return (
        <main>
            <Button handleClick={handleClick}>Nuevo Reclamo</Button>
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
