import {combineReducers} from 'redux';
import {loginReducer, userDataReducer} from './login/loginReducers';
import registerReducer from './register/registerReducers';
import {getPostsReducer, postsDataReducer} from './posts/postsReducers';

export const rootReducer = combineReducers({
  registerReducer,
  loginReducer,
  userDataReducer,
  getPostsReducer,
  postsDataReducer,
});
