import React from 'react';
import {animated, useSpring} from 'react-spring';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Modal.scss';


const Modal = ({children, className, customTop, closeModal, showModal, title}) => {
    const overlayProps = useSpring(showModal ? {opacity:1, zIndex: 0} : {opacity: 0, zIndex: -10});
    const modalProps = useSpring(showModal ? {to: {top:customTop?customTop:120}} : {to: {top: -1000}});
    return (
        <div>
                    <div>
                        <animated.div style={overlayProps} className="modal-overlay"></animated.div>
                        <animated.section style={modalProps} className={`${className} modal`}>
                            <header className="modal-header">
                                <h2 className="modal-header-title">{title}</h2>
                                <button aria-label="Close modal" onClick={closeModal} className="modal-header-close">
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </header>
                            <section className="modal-content">
                                {children}
                            </section>
                        </animated.section>
                    </div>
            
        </div>
        
    )
}

export default Modal;
