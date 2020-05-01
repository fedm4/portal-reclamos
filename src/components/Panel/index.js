import React from 'react';
import './Panel.scss';

const Panel = ({children}) => {
    return (
        <section className="panel">
            {children}
        </section>
    )
}

export default Panel;
