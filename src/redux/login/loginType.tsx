export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

interface UserDetails {
  updated_by: string;
  email: string;
  id: number;
  full_name: string;
  last_name: string;
  phone: string;
}



interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: any;
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string; // Error message
}

export type AuthActionTypes = LoginSuccessAction | LoginFailureAction;
