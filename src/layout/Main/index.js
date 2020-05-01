import React, {useState} from 'react';

import Button from '../../components/Button';
import Panel from '../../components/Panel';
import PanelHeader from '../../components/PanelHeader';
import ReclamoModals from '../../components/ReclamoModals';
import ReclamoTable from '../../components/ReclamoTable/';

const Main = () => {

    const [reclamoOpen, setReclamoOpen] = useState(false);
    
    return (
        <main>
            <Panel>
                <PanelHeader title="Reclamos">
                    <Button handleClick={() => setReclamoOpen(true)}>Nuevo Reclamo</Button>
                </PanelHeader>
                <ReclamoTable />
            </Panel>
            <ReclamoModals
                reclamoOpen={reclamoOpen}
                setReclamoOpen={setReclamoOpen}
            />
        </main>
    )
}

export default Main;
