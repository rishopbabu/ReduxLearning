export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

interface Posts {
  Post: Post;
  votes: number;
}

interface Post {
  title: string;
  content: string;
  is_published: boolean;
  id: number;
  created_at: Date;
  user_id: number;
  user_detail: UserDetail;
}

interface UserDetail {
  id: number;
  name: string;
  phone: string;
  email: string;
  created_at: Date;
}

interface GetPostsSuccessAction {
  type: typeof GET_POSTS_SUCCESS;
  payload: Posts;
}

interface GetPostsFailureActions {
  type: typeof GET_POSTS_FAILURE;
  payload: string | null;
}

export type GetPostsActionTypes =
  | GetPostsSuccessAction
  | GetPostsFailureActions;
