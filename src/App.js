import React, {useContext, useReducer} from 'react';
import './App.css';
import FirebaseContext from './context/FirebaseContext';
import Reclamo from './models/Reclamo';

const reducer = (state, action) => {
  const reclamo = {...state.reclamo};
  switch(action.type) {
    case "changeInput":
      reclamo[action.key] = action.value;
      return {...state, reclamo };
    case "changeImg":
      reclamo.imagen = action.imagen.name;
      return {...state, imagen: action.imagen};
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {reclamo: new Reclamo() });

  const handleChange = e => {
    dispatch({
      type: "changeInput",
      key: e.target.name,
      value: e.target.value
    })
  };

  const handleImagen = e => {
    dispatch({
      type: "changeImg",
      imagen: e.target.files[0]
    });
  };

  const firebase = useContext(FirebaseContext);
  const doIt = ()=>{
    const id = firebase.generarReclamo(state.reclamo);
    //TODO: Mostrar modal con ID
  };

  return (
    <div className="App">
      <form>
        <input type="text" name="titulo" onChange={handleChange} />
        <textarea name="descripcion" onChange={handleChange}></textarea>
        <input type="text" name="comuna" onChange={handleChange} />
        <input type="file" name="imagen" onChange={handleImagen} />
        <button type="button" onClick={doIt}>Save!</button>
      </form>
    </div>
  );
}

export default App;
