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
      console.log('response:', response.data);
      if (response && response.data && response.data.access_token) {
        const {access_token, user_details} = response.data;
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            access_token,
            user_details,
          },
        });
      } else {
        dispatch({
          type: LOGIN_FAILURE,
          payload: 'Invalid response from the server',
        });
      }
    } catch (error: any) {
      console.error('API Error:', error.response.data);
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.response.data.detail,
      });
      console.log(
        'LOFIN_FAILURE action dispatched with error message:',
        error.response.data.detail,
      );
      throw new Error(error.response.data.detail);
    } finally {
      console.log('Finnaly statement executed');
    }
  };
