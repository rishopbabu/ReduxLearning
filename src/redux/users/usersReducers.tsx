import {
  getUsersActionTypes,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
} from './usersTypes';

interface GetUsersState {
  users: any | null;
  error: string | null;
}

const initialState: GetUsersState = {
  users: null,
  error: null,
};

export const getAllUsersReducer = (
  state = initialState,
  action: getUsersActionTypes,
): GetUsersState => {
  switch (action.type) {
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: null,
      };

    case GET_ALL_USERS_FAILURE:
      return {
        ...state,
        users: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getAllUserDataReducer = (
  state: any | null,
  action: getUsersActionTypes,
) => {
  if (action.type === GET_ALL_USERS_SUCCESS) {
    return {
      payload: action.payload,
    };
  } else {
    return state;
  }
};
