export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';

interface RegisterRequestAction {
  type: typeof REGISTER_REQUEST;
  payload: boolean;
}

interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  payload: string; // Token
}

interface RegisterFailureAction {
  type: typeof REGISTER_FAILURE;
  payload: string; // Error message
}

export type RegisterActionTypes =
  | RegisterRequestAction
  | RegisterSuccessAction
  | RegisterFailureAction;
