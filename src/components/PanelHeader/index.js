import React from 'react';
import './PanelHeader.scss';

const PanelHeader = ({children, title}) => {
    return (
        <header className="panel-header">
            <h2>{title}</h2>
            {children}
        </header>
    )
}

export default PanelHeader;
