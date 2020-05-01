import React from 'react';
import {animated, useSpring} from 'react-spring';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './FormModal.scss';


const FormModal = ({children, closeModal, showModal, title}) => {
    const modalProps = useSpring(showModal ? 
        {to: {left:'0vw'}}
        :
        {to: {left: '-100vw'}});
    return (
        <animated.section style={modalProps} className="form-modal">
            <header className="form-modal-header">
                <h2 className="form-modal-header-title">{title}</h2>
                <button onClick={closeModal} className="form-modal-header-close">
                    <FontAwesomeIcon aria-hidden="true" icon={faTimes} />
                    <span className="close-modal-text">Cerrar Modal</span>
                </button>
            </header>
            <section className="form-modal-content">
                {children}
            </section>
        </animated.section>
        
    )
}

export default FormModal;
