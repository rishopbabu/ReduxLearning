import {combineReducers} from 'redux';
import loginReducer from './login/loginReducers';

export const rootReducer = combineReducers({
    loginReducer,
})