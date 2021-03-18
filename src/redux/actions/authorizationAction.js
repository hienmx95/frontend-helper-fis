const axios = require('axios');

import { FETCH_PERMISSIONS_SUCCESS } from '../constants/actionTypes';
import { getToken } from '../../localStorageCookies';

export { getPermissionForUser };

function getPermissionForUser() {
  return async (dispatch) => {
    const FWORK_API_ENDPOINT = process.env.FWORK_API_ENDPOINT || process.env.REACT_APP_FWORK_API_ENDPOINT;
    const IAM_BACKEND_PERMISSION = FWORK_API_ENDPOINT + '/iam/authorization/';

    const PROJECT_CODE = process.env.PROJECT_CODE;
    const token = getToken();
    if (!token) {
      return;
    }
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const url = IAM_BACKEND_PERMISSION + PROJECT_CODE;
    let options = {
      url,
      method: 'GET',
      headers,
      timeout: 30000,
    };

    axios(options)
      .then((response) => {
        try {
          dispatch({
            type: FETCH_PERMISSIONS_SUCCESS,
            payload: response.data.result,
          });
        } catch (e) {
          console.error('FETCH_PERMISSIONS_SUCCESS ERR: ', e);
        }
      })
      .catch((error) => {
        console.error('error fetch permissions: ', error);
      });
  };
}
