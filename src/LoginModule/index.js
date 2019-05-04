import React from 'react';
import { connect } from 'react-redux';
import { actualizarNombre } from './redux/userActions';

export const User = props => (
<div>
<p> {props.usuario.nombre} {props.usuario.apellido} estamos en  {props.contador} </p>
<input onChange={evt => props.actualizarNombre(evt.target.value)}/>
</div>);

const mapStateToProps = store =>({ 
    contador: store && store.login.contador,
    usuario: store.user.usuario,
 });

const dispatchToProps = dispatch =>{
    return {
        actualizarNombre: (nombre) => dispatch(actualizarNombre(nombre)), 
    }
};

const mergeProps = (mapState, mapDispatch, otherProps) =>
{
    console.log(mapState, mapDispatch);

    let sefue = mapState && mapState.usuario.nombre;
    if(mapState.contador > 4) 
        sefue = 'Se fue!!';
    return {
        ...mapState,
        ...mapDispatch,
        usuario: {
            nombre: mapState && mapState.usuario.nombre,
            apellido: sefue,
        }
    }
}
export default connect(mapStateToProps, dispatchToProps, mergeProps)(User);
