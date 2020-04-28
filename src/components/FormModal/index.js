import React from 'react';
import {animated, useSpring} from 'react-spring';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './FormModal.scss';


const FormModal = ({children, closeModal, footerChildren, showModal, title}) => {
    const modalProps = useSpring(showModal ? 
        {to: {width:'100vw'}}
        :
        {to: {width: '0vw'}});
    return (
        <animated.section style={modalProps} className="form-modal">
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
        </animated.section>
        
    )
}

export default FormModal;
