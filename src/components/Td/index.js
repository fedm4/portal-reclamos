import React from 'react';
import './Td.scss';

const Td = ({hideable, children}) => {
    return (
        <td className={`td ${hideable ? 'hideable' : ''}`}>
            {children}
        </td>
    )
}

export default Td;
