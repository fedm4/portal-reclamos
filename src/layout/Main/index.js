import React, {useState} from 'react';
import ReclamoForm from './../../components/ReclamoForm';
import Button from '../../components/Button';

const Main = () => {
    const [reclamoOpen, setReclamoOpen] = useState(false);
    const [restart, setRestart] = useState(false);
    const handleClick = () => {
        setReclamoOpen(true);
        setRestart(!restart);
    }
    return (
        <main>
            <Button handleClick={handleClick}>Nuevo Reclamo</Button>
            <ReclamoForm reclamoOpen={reclamoOpen} setReclamoOpen={setReclamoOpen} restart={restart}/>
        </main>
    )
}

export default Main;
