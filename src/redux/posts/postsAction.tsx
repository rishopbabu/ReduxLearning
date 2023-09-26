import axios from 'axios';
import {Dispatch} from 'redux';
import {GET_POSTS_FAILURE, GET_POSTS_SUCCESS} from './postsTypes';
import {config} from '../../Constants';

export const getAllPosts =
  (access_token: any) => async (dispatch: Dispatch) => {
    try {
      const url = config.url.GET_ALL_POSTS_URL;
      const headers = {
        Authorization: `Bearer ${access_token}`,
      };
      const response = await axios.get(url, {headers});
      getAllPostsData(response.data)(dispatch);
      dispatch({
        type: GET_POSTS_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: GET_POSTS_FAILURE,
        payload: error.response.data.detail,
      });
      throw new Error(error.response.data.detail);
    } finally {
    }
  };

export const getAllPostsData = (payload: any) => (dispatch: Dispatch) => {
  dispatch({
    type: GET_POSTS_SUCCESS,
    payload,
  });
};
