import { createStore } from 'redux';
import  userReducer  from '../UserModule/redux/userReducer';

export const store = createStore(userReducer);

export const dispatch = store.dispatch;