import {
  FETCH_SETTING,
  FETCH_SETTING_SUCCESS,
  FETCH_SETTING_FAILURE
} from '../constants/actionTypes';
import fetchAPI from '../../fetchAPI';


function getSettings() {
  return async dispatch => {
    dispatch(fetching());
    const FWORK_API_ENDPOINT = process.env.FWORK_API_ENDPOINT || process.env.REACT_APP_FWORK_API_ENDPOINT;
    const baseURL = FWORK_API_ENDPOINT + '/setting'; // Default = process.env.URL_BACKEND
    const projectId = process.env.PROJECT_CODE;
    const url = `/setting/${projectId}`;
    const method = 'GET';
    const service = {
      baseURL,
      url,
      method
    };
    fetchAPI(service)
      .then(res => {
        if (res.data.result && res.data.success) {
          dispatch(success(res.data.result.settings));
        } else {
          dispatch(failure());
        }
      });
  };

  function fetching() {
    return {
      type: FETCH_SETTING
    };
  }

  function success(payload) {
    return {
      type: FETCH_SETTING_SUCCESS,
      payload
    };
  }
  function failure() {
    return {
      type: FETCH_SETTING_FAILURE
    };
  }
}
export {
  getSettings
};
