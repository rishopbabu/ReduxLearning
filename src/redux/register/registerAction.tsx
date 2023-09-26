import axios from 'axios';
import {Dispatch} from 'redux';
import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
} from './registerType';
import {config} from '../../Constants';

export const register =
  (name: string, email: string, phone: string, password: string) =>
  async (dispatch: Dispatch) => {
    const url = config.url.REGISTER_URL;
    const userData = {
      name: name,
      email: email,
      phone: phone,
      password: password,
    };

    dispatch({
      type: REGISTER_REQUEST,
      payload: true,
    });

    try {
      const response = await axios.post(url, userData);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: error.response.data.detail,
      });
      throw new Error(error.response.data.detail);
    }
  };
