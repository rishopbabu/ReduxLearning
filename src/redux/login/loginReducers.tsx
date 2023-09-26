import {AuthActionTypes, LOGIN_SUCCESS, LOGIN_FAILURE} from './loginType';

interface AuthState {
  access_token: string | null;
  user_details: any | null;
  error: string | null;
}

const initialState: AuthState = {
  access_token: null,
  user_details: null,
  error: null,
};

const loginReducer = (
  state = initialState,
  action: AuthActionTypes,
): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        access_token: action.payload.access_token,
        user_details: action.payload.user_details,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        access_token: null,
        user_details: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
