import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Modal.scss';


const Modal = ({children, closeModal, footerChildren, showModal, title}) => {
    
    if(!showModal) return null;

    return (
        <div>
            <div className="modal-overlay"></div>
            <section className="modal">
                <header className="modal-header">
                    <h2 className="modal-header-title">{title}</h2>
                    <button onClick={closeModal} className="modal-header-close">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </header>
                <section className="modal-content">
                    {children}
                </section>
                <footer className="modal-footer">
                    { footerChildren() }
                </footer>
            </section>
        </div>
    )
}

export default Modal;
