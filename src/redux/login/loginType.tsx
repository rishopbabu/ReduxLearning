// authTypes.ts

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: string; // Token
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string; // Error message
}

export type AuthActionTypes = LoginSuccessAction | LoginFailureAction;
