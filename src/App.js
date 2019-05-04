import React from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';

export function App(props) {
  const { contador, actualizarNombre } = props;
  if(!contador) return <div>Loading...</div>;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         estamos en  {contador}
        </p>
        <input onChange={evt => actualizarNombre(evt.target.value)}/>
        <a  
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export const ACTUALIZAR_NOMBRE = '[USUARIO][APP] cambio texto';
export const actualizarNombre = (nombre) => {
  return {
    type: ACTUALIZAR_NOMBRE,
    nombre
  }
}
export default connect(store =>({ contador: store && store.contador }), 
dispatch =>{
  return {
    actualizarNombre: (nombre) => dispatch(actualizarNombre(nombre)), 
  }
})(App);
