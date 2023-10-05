const DEV_BASE_URL = 'http://10.0.2.2:8000';
const PROD_BASE_URL = 'https://fastapi-rishop.onrender.com/';


const dev = {
  url: {
    BASE_URL: DEV_BASE_URL,
    AUTH_URL: DEV_BASE_URL + '/auth/login',
    REGISTER_URL: DEV_BASE_URL + '/auth/register',
    GET_ALL_USERS_URL: DEV_BASE_URL + '/auth/get_all_users',
    GET_USER_BY_ID_URL: DEV_BASE_URL + '/auth/get_user/',
    UPDATE_USER_DETAIL_URL: DEV_BASE_URL + '/auth/update_user/',
    UPDATE_USER_PASSWORD: DEV_BASE_URL + '/auth/update_password/',
    UPLOAD_PROFILE_PIC: DEV_BASE_URL + '/auth/upload_profile_pic/',
    GET_PROFILE_PIC: DEV_BASE_URL + '/auth/get_profile_picture_url/',
    DELETE_USER: DEV_BASE_URL + '/auth/delete_user/',
    GET_ALL_POSTS_URL: DEV_BASE_URL + '/post/get_all_post',
    GET_POST_BY_ID_URL: DEV_BASE_URL + '/post/get_post/',
    CREATE_POST_URL: DEV_BASE_URL + '/post/create_post',
    UPDATE_POST_URL: DEV_BASE_URL + '/post/update_post/',
    DELETE_POST_BY_ID_URL: DEV_BASE_URL + '/post/delete_post/',
    VOTE_POST_URL: DEV_BASE_URL + '/vote/post_vote',
  },
};

const prod = {
  url: {
    BASE_URL: PROD_BASE_URL,
    AUTH_URL: PROD_BASE_URL + 'auth/login',
    REGISTER_URL: PROD_BASE_URL + 'auth/register',
    GET_ALL_USERS_URL: PROD_BASE_URL + 'auth/get_all_users',
    GET_USER_BY_ID_URL: PROD_BASE_URL + 'auth/get_user/',
    UPDATE_USER_DETAIL_URL: PROD_BASE_URL + 'auth/update_user/',
    UPDATE_USER_PASSWORD: PROD_BASE_URL + 'auth/update_password/',
    UPLOAD_PROFILE_PIC: PROD_BASE_URL + 'auth/upload_profile_pic/',
    GET_PROFILE_PIC: PROD_BASE_URL + 'auth/get_profile_picture_url/',
    DELETE_USER: PROD_BASE_URL + 'auth/delete_user/',
    GET_ALL_POSTS_URL: PROD_BASE_URL + 'post/get_all_post',
    GET_POST_BY_ID_URL: PROD_BASE_URL + '/post/get_post/',
    CREATE_POST_URL: PROD_BASE_URL + 'post/create_post',
    UPDATE_POST_URL: PROD_BASE_URL + 'post/update_post/',
    DELETE_POST_BY_ID_URL: PROD_BASE_URL + 'post/delete_post/',
    VOTE_POST_URL: PROD_BASE_URL + 'vote/post_vote',
  },
};



export const config = process.env.NODE_ENV === 'development' ? dev : prod;
