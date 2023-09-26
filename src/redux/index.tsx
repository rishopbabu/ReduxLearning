import {combineReducers} from 'redux';
import {loginReducer, userDataReducer} from './login/loginReducers';
import registerReducer from './register/registerReducers';
import {getPostsReducer, postsDataReducer} from './posts/postsReducers';
import {getAllUsersReducer, getAllUserDataReducer} from './users/usersReducers';

export const rootReducer = combineReducers({
  registerReducer,
  loginReducer,
  userDataReducer,
  getPostsReducer,
  postsDataReducer,
  getAllUsersReducer,
  getAllUserDataReducer,
});
