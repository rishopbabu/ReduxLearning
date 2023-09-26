import axios from 'axios';
import {Dispatch} from 'redux';
import {LOGIN_SUCCESS, LOGIN_FAILURE} from './loginType';
import {config} from '../../Constants';

export const login =
  (username: string, password: string) => async (dispatch: Dispatch) => {
    try {
      const url = config.url.AUTH_URL;
      const requestBody = new URLSearchParams();
      requestBody.append('grant_type', 'password');
      requestBody.append('username', username);
      requestBody.append('password', password);

      const response = await axios.post(url, requestBody.toString());
      userDetails(response.data)(dispatch);
      if (response && response.data) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: LOGIN_FAILURE,
          payload: 'Invalid response from the server',
        });
      }
    } catch (error: any) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.response.data.detail,
      });
      throw new Error(error.response.data.detail);
    } finally {
    }
  };

export const userDetails = (payload: any) => (dispatch: Dispatch) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload,
  });
};
