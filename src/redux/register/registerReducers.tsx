import {
  RegisterActionTypes,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
} from './registerType';

interface RegisterState {
  user_detail: null; // Initial user data is null
  loading: false; // Initial loading state is false
  error: null;
}

const initialState: RegisterState = {
  user_detail: null, // Initial user data is null
  loading: false, // Initial loading state is false
  error: null,
};

const registerReducer = (state = initialState, action: RegisterActionTypes) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user_detail: action.payload, // Store the user data in the state
        error: null,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        user_detail: null,
        error: action.payload, // Store the error message in the state
      };
    default:
      return state;
  }
};

export default registerReducer;
