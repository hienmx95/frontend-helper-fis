import axios from 'axios';
import { getToken } from '../localStorageCookies';

import { notification } from 'antd';
const token = getToken();

export default function (config) {
  if (typeof config === 'function') {
    config = {};
  }
  const FWORK_API_ENDPOINT = process.env.FWORK_API_ENDPOINT || process.env.REACT_APP_FWORK_API_ENDPOINT;
  const defaultConfig = {
    baseURL: FWORK_API_ENDPOINT + '/storage',
    url: '/multiple-upload/files',
    data: {},
    method: 'post',
    headers: {
      'content-type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    },
  };
  config = Object.assign({}, defaultConfig, config);

  return new Promise((resolve) => {
    axios(config)
      .then(async (response) => {
        resolve(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          const err = error.response;
          resolve(err);
        } else {
          // server error
          console.log(
            'Error: ',
            error.message,
            error.request,
            ' --- ',
            error.code
          );
          if (error.code === 'ECONNABORTED') {
            notificationErr('Request time out');
          } else {
            notificationErr(error.message);
          }
        }
      });
  });
}

function notificationErr(description) {
  notification.error({
    message: 'Error',
    description,
    duration: 2,
    style: { width: 350, marginLeft: 35, marginTop: 45 },
  });
}
