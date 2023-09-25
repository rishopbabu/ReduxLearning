import {combineReducers} from 'redux';
import loginReducer from './login/loginReducers';
import registerReducer from './register/registerReducers';

export const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
});
