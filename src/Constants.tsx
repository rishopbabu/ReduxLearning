const DEV_BASE_URL = 'http://192.168.0.196:8000/';
const PROD_BASE_URL = 'https://fastapi-rishop.onrender.com/';

const prod = {
  url: {
    BASE_URL: PROD_BASE_URL,
    AUTH_URL: PROD_BASE_URL + 'auth/login',
    REFRESH_AUTH_URL: PROD_BASE_URL + 'auth/refresh-token',
    REGISTER_URL: PROD_BASE_URL + 'users/register',
    GET_ALL_USERS_URL: PROD_BASE_URL + 'users/get_all_users',
    GET_USER_BY_ID_URL: PROD_BASE_URL + 'users/get_user/',
    GET_ALL_POSTS_URL: PROD_BASE_URL + 'posts/get_all_posts',
    GET_POST_BY_ID_URL: PROD_BASE_URL + 'posts/get_post/',
    CREATE_POST_URL: PROD_BASE_URL + 'posts/create_post',
    UPDATE_POST_URL: PROD_BASE_URL + 'posts/update_post/',
    DELETE_POST_BY_ID_URL: PROD_BASE_URL + 'posts/delete_post/',
    VOTE_POST_URL: PROD_BASE_URL + 'vote/',
  },
};

const dev = {
  url: {
    BASE_URL: DEV_BASE_URL,
    AUTH_URL: DEV_BASE_URL + 'auth/login',
    REFRESH_AUTH_URL: DEV_BASE_URL + 'auth/refresh-token',
    REGISTER_URL: DEV_BASE_URL + 'users/register',
    GET_ALL_USERS_URL: DEV_BASE_URL + 'users/get_all_users',
    GET_USER_BY_ID_URL: DEV_BASE_URL + 'users/get_user/',
    GET_ALL_POSTS_URL: DEV_BASE_URL + 'posts/get_all_posts',
    GET_POST_BY_ID_URL: DEV_BASE_URL + '/posts/get_post/',
    CREATE_POST_URL: DEV_BASE_URL + 'posts/create_post',
    UPDATE_POST_URL: DEV_BASE_URL + 'posts/update_post/',
    DELETE_POST_BY_ID_URL: DEV_BASE_URL + 'posts/delete_post/',
    VOTE_POST_URL: DEV_BASE_URL + 'vote/',
  },
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
