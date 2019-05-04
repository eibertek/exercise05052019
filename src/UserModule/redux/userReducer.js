import {ACTUALIZAR_NOMBRE, CONTADOR} from './userActions';

const initialStore = {
    contador:0,
    usuario:{nombre:null,
            apellido:null,
    }
};
export const userReducer = (store=initialStore, action) => {
    switch (action.type) {
        case ACTUALIZAR_NOMBRE:
            return {
                ...store,
                usuario:{
                    ...store.usuario,
                    nombre: action.nombre,
                }
            };                
        case CONTADOR: 
            return {
                ...store,
                contador:store.contador + 1,
            };
        default:
            return store;
    }
};

export default userReducer;