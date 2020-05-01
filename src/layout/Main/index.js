import React, {useState} from 'react';

import Button from '../../components/Button';
import Panel from '../../components/Panel';
import PanelHeader from '../../components/PanelHeader';
import ReclamoModals from '../../components/ReclamoModals';
import ReclamoTable from '../../components/ReclamoTable/';
import './Main.scss';

const Main = () => {

    const [reclamoOpen, setReclamoOpen] = useState(false);
    
    return (
        <main className="content-main">
            <Panel>
                <PanelHeader title="Reclamos" />
                <div className="reclamo-table-container">
                    <ReclamoTable />
                </div>
            </Panel>
            <ReclamoModals
                reclamoOpen={reclamoOpen}
                setReclamoOpen={setReclamoOpen}
            />
            <Button className="nuevo-reclamo black" handleClick={() => setReclamoOpen(true)}>Nuevo Reclamo</Button>
        </main>
    )
}

export default Main;
