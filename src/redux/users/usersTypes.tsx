export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_FAILURE = 'GET_ALL_USERS_FAILURE';

interface allUsers {
  id: number;
  name: string;
  phone: string;
  email: string;
  created_at: Date;
}

interface GetUsersSuccess {
  type: typeof GET_ALL_USERS_SUCCESS;
  payload: allUsers;
}

interface GetUsersFailure {
  type: typeof GET_ALL_USERS_FAILURE;
  payload: string | null;
}

export type getUsersActionTypes = GetUsersSuccess | GetUsersFailure;
