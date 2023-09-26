import {
  GetPostsActionTypes,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
} from './postsTypes';

interface GetPostsState {
  posts: any | null;
  error: string | null;
}

const initialState: GetPostsState = {
  posts: null,
  error: null,
};

const getPostsReducer = (
  state = initialState,
  action: GetPostsActionTypes,
): GetPostsState => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        error: null,
      };

    case GET_POSTS_FAILURE:
      return {
        ...state,
        posts: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getPostsReducer;
