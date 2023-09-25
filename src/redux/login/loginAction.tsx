// authActions.ts

import axios from 'axios';
import {Dispatch} from 'redux';
import {LOGIN_SUCCESS, LOGIN_FAILURE} from './loginType';

export const login =
  (username: string, password: string) => async (dispatch: Dispatch) => {
    console.log('username: ', username);
    console.log('password: ', password);
    try {
      const url = 'https://fastapi-rishop.onrender.com/login';
      const requestBody = new URLSearchParams();
      requestBody.append('grant_type', 'password');
      requestBody.append('username', username);
      requestBody.append('password', password);

      const response = await axios.post(url, requestBody.toString());
      console.log('response:', response.data);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data.access_token,
      });
    } catch (error: any) {
      console.error('API Error:', error.response.data);
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.message,
      });
    }
  };