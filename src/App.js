import React, {useContext, useReducer} from 'react';
import './App.css';
import FirebaseContext from './context/FirebaseContext';
import Reclamo from './models/Reclamo';

/**
 * State contiene reclamo (tipo Reclamo)
 * e imagen de tipo File.
 */
const reducer = (state, action) => {
  const reclamo = {...state.reclamo};
  switch(action.type) {
    case "changeInput":
      reclamo[action.key] = action.value;
      return {...state, reclamo };
    case "changeImg":
      reclamo['imagen'] = action.imagen.name;
      return { reclamo, imagen: action.imagen };
    default:
      return state;
  }
};


const App = () => {
  const [state, dispatch] = useReducer(reducer, {reclamo: new Reclamo() });
  const firebase = useContext(FirebaseContext);
  
  /**
   * Función Change para inputs excepto file
   * @param {Event} e
   */
  const handleChange = e => {
    dispatch({
      type: "changeInput",
      key: e.target.name,
      value: e.target.value
    });
  };

  /**
   * Functión change para File
   * @param {Event} e 
   */
  const handleImagen = e => {
    dispatch({
      type: "changeImg",
      imagen: e.target.files[0]
    });
  };

  /**
   * Toma reclamo e imagen de state y los pasa a firebase para 
   * generar el reclamo y guardar la img en storage.
   * Muestra modal con nuevo ID a modo de mensaje 
   * de éxito al guardar todo.
   */
  const doIt = async ()=>{
    try {
      const id = await firebase.generarReclamo(state.reclamo, state.imagen);
      console.log(id);
      //TODO: Mostrar modal con ID
    }catch (err) {
      console.log(err);
      //TODO: Handle error
    }
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
