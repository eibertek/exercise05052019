/** Action types */
export const ACTUALIZAR_NOMBRE = '[USUARIO][APP] cambio texto';
export const CONTADOR = '[MAIN][APP] contador para no se que';

/** Action creators */
export const actualizarNombre = (nombre) => {
  return {
    type: ACTUALIZAR_NOMBRE,
    nombre
  }
}
