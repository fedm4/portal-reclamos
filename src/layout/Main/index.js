import React, {useState} from 'react';
import ReclamoForm from './../../components/ReclamoForm';
import Button from '../../components/Button';

const Main = () => {
    const [reclamoOpen, setReclamoOpen] = useState(false);

    return (
        <main>
            <Button handleClick={() => setReclamoOpen(true)}>Nuevo Reclamo</Button>
            <ReclamoForm reclamoOpen={reclamoOpen} setReclamoOpen={setReclamoOpen}/>
        </main>
    )
}

export default Main;
