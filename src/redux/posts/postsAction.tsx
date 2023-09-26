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
      console.log('response for get all post:', response.data);
      dispatch({
        type: GET_POSTS_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      console.error('API Error:', error.response.data);
      dispatch({
        type: GET_POSTS_FAILURE,
        payload: error.response.data.detail,
      });
      console.log(
        'LOFIN_FAILURE action dispatched with error message:',
        error.response.data.detail,
      );
      throw new Error(error.response.data.detail);
    } finally {
      console.log('Finnaly statement executed in postActions');
    }
  };
