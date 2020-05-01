import React, {useEffect, useState} from 'react';
import ReclamoForm from '../ReclamoForm';
import Modal from '../Modal';

const ReclamoModals = ({reclamoOpen, setReclamoOpen}) => {
    const [showSuccessModal, setShowSuccessModal] = useState({showModal: false, id: null});
    const [restart, setRestart] = useState(false);
    
    const openSuccessModal = (id) => {
        setShowSuccessModal({showModal: true, id});
    };

    useEffect(() => setRestart(!restart), [reclamoOpen]);

    return (
        <div>
            <ReclamoForm
                reclamoOpen={reclamoOpen}
                setReclamoOpen={setReclamoOpen}
                restart={restart}
                successModal={openSuccessModal}
            />
            <Modal
                title="Nuevo Reclamo"
                showModal={showSuccessModal.showModal}
                closeModal={() => {setShowSuccessModal({...showSuccessModal, showModal: false})}}
            >
                <p>Su nuevo reclamo se generó con ID {showSuccessModal.id}</p>
            </Modal>
        </div>);
};

export default ReclamoModals;
