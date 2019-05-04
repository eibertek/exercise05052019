import { createStore } from 'redux';
import { ACTUALIZAR_NOMBRE } from '../App';

const rootReducer = (store={
    contador:0,
    usuario:{nombre:null,
            apellido:null,
    }
}, action) => {
    console.log(store, action);
    if(action.type==='contador') 
        return {
            ...store,
            contador:store.contador + 1,
        };
    if(action.type===ACTUALIZAR_NOMBRE) 
        return {
            ...store,
            usuario:{
                ...store.usuario,
                nombre: action.nombre,
            },
        };        
};
export const store = createStore(rootReducer);

export const dispatch = store.dispatch;