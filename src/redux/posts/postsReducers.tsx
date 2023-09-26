import {
  GetPostsActionTypes,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
} from './postsTypes';

interface GetPostsState {
  post: any | null;
  error: string | null;
}

const initialState: GetPostsState = {
  post: null,
  error: null,
};

export const getPostsReducer = (
  state = initialState,
  action: GetPostsActionTypes,
): GetPostsState => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        post: action.payload,
        error: null,
      };

    case GET_POSTS_FAILURE:
      return {
        ...state,
        post: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const postsDataReducer = (
  state: any | null = null,
  action: GetPostsActionTypes,
) => {
  if (action.type === GET_POSTS_SUCCESS) {
    return {
      payload: action.payload,
    };
  } else {
    return state;
  }
};
