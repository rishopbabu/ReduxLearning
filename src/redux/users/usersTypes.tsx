export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_FAILURE = 'GET_ALL_USERS_FAILURE';

interface Welcome {
  message:           string;
  total_users_count: number;
  users_list:        UsersList[];
}

interface UsersList {
  email:       string;
  first_name:  string;
  id:          number;
  last_name:   string;
  phone:       string;
  profile_pic: null;
  updated_by:  Date;
}

interface GetUsersSuccess {
  type: typeof GET_ALL_USERS_SUCCESS;
  payload: UsersList;
}

interface GetUsersFailure {
  type: typeof GET_ALL_USERS_FAILURE;
  payload: string | null;
}

export type GetUsersActionTypes = GetUsersSuccess | GetUsersFailure;
