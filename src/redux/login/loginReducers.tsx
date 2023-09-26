import {AuthActionTypes, LOGIN_SUCCESS, LOGIN_FAILURE} from './loginType';

interface AuthState {
  payload: any | null;
  error: string | null;
}

const initialState: AuthState = {
  payload: null,
  error: null,
};

export const loginReducer = (
  state = initialState,
  action: AuthActionTypes,
): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        payload: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userDataReducer = (state: any | null = null, action: AuthActionTypes) => {
  if (action.type === LOGIN_SUCCESS) {
    return {
      payload: action.payload,
    };
  } else {
    return state;
  }
  
};
