import {combineReducers} from 'redux';
import {loginReducer, userDataReducer} from './login/loginReducers';
import registerReducer from './register/registerReducers';
import getPostsReducer from './posts/postsReducers';

export const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  getPostsReducer,
  userDataReducer,
});
