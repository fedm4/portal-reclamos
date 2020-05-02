import React from 'react';
import './Td.scss';

const Td = ({hideable, children, style}) => {
    return (
        <td className={`td ${hideable ? 'hideable' : ''}`} style={style}>
            {children}
        </td>
    )
}

export default Td;
