import React from 'react';
import {animated, useSpring} from 'react-spring';
import './FormAnimatedItem.scss';

const FormAnimatedItem = ({itemIndex, currentIndex, children}) => {
    
    const itemProps = useSpring(
        {
            transform: currentIndex > itemIndex ?
            'translateX(-150vw)'
            :
            currentIndex === itemIndex ? 
                'translateX(0)'
                :
                'translateX(150vw)',
            from: {transform: 'translateX(150vw)'},
            

        }
    );
    return (
        <animated.div className="form-animated-item" style={itemProps}>
            {children}
        </animated.div>
    )
}

export default FormAnimatedItem;
