import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
} from '../constants/userConstant';
import axios from 'axios';


export const listUsers = () => async (dispatch: any) => {
  const baseUrl = 'https://dummyjson.com/'

  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });

    const { data } = await axios.get(baseUrl + 'users?limit=100');

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
