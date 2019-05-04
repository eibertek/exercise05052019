import React from 'react';
import { connect } from 'react-redux';
import { actualizarNombre } from './redux/userActions';

export const User = props => (
<div>
<p> {props.usuario.nombre} estamos en  {props.contador} </p>
<input onChange={evt => props.actualizarNombre(evt.target.value)}/>
</div>);

export default connect(
    store =>({ 
        contador: store && store.contador,
        usuario: store.usuario,
     }), 
dispatch =>{
  return {
    actualizarNombre: (nombre) => dispatch(actualizarNombre(nombre)), 
  }
})(User);
