export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

interface UserDetails {
  created_at: string;
  email: string;
  id: number;
  name: string;
  phone: string;
}

// interface LoginSuccessAction {
//   type: typeof LOGIN_SUCCESS;
//   payload: {
//     access_token: string;
//     user_details: UserDetails;
//   };
// }

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: any;
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string; // Error message
}

export type AuthActionTypes = LoginSuccessAction | LoginFailureAction;
