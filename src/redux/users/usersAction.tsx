import axios from 'axios';
import {Dispatch} from 'redux';
import {GET_ALL_USERS_SUCCESS, GET_ALL_USERS_FAILURE} from './usersTypes';
import {config} from '../../Constants';

export const getAllUsers =
  (access_token: any) => async (dispatch: Dispatch) => {
    try {
      const url = config.url.GET_ALL_USERS_URL;
      const headers = {
        Authorization: `Bearer ${access_token}`,
      };
      const response = await axios.get(url, {headers});
      getAllUsersData(response.data)(dispatch)
      dispatch({
        type: GET_ALL_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: GET_ALL_USERS_FAILURE,
        payload: error.response.data.detail,
      });
      throw new Error(error.response.data.detail);
    } finally {
    }
  };

export const getAllUsersData = (payload: any) => (dispatch: Dispatch) => {
    dispatch({
        type: GET_ALL_USERS_SUCCESS,
        payload
    })
}