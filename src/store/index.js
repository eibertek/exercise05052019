import { createStore, combineReducers } from 'redux';
import  userReducer  from '../UserModule/redux/userReducer';
import  loginReducer  from '../LoginModule/redux/userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    login: loginReducer,
});
export const store = createStore(rootReducer);

export const dispatch = store.dispatch;