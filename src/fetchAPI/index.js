'use strict';

const axios = require('axios');
import { getToken, removeToken, setToken, setTokenExpire } from '../localStorageCookies';
import handleNotification from '../notification';

export default function (
  url,
  method = 'POST',
  data = null,
  params = {},
  baseURL = null,
  notification = {}
) {
  const serviceName = window.location.pathname.split('/')[1];
  const FWORK_API_ENDPOINT = process.env.FWORK_API_ENDPOINT || process.env.REACT_APP_FWORK_API_ENDPOINT;
  const BACKEND_ENDPOINT = FWORK_API_ENDPOINT + `/${serviceName}`;

  const token = getToken();
  baseURL = baseURL ? baseURL : BACKEND_ENDPOINT;
  if (typeof url === 'object') {
    baseURL = url.hasOwnProperty('baseURL') ? url.baseURL : BACKEND_ENDPOINT;
    params = url.hasOwnProperty('params') ? url.params : {};
    data = url.hasOwnProperty('body') ? url.body : null;
    method = url.hasOwnProperty('method') ? url.method : 'POST';
    notification = url.hasOwnProperty('notification') ? url.notification : {};
    url = url.hasOwnProperty('url') ? url.url : '/';
  }
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  let options = {
    baseURL,
    url,
    method,
    headers,
    params,
    data,
    timeout: 30000,
  };
  return new Promise((resolve) => {
    axios(options)
      .then(async (response) => {
        if (response.data.data && response.data.data.newToken) {
          setTokenExpire(response.data.data.newToken, 30);
        }
        handleNotification(method, response.data, notification);
        resolve(response);
      })
      .catch(function (error) {
        if (error.response) {
          const err = error.response;
          if (err.status === 401) {
            removeToken();
            window.location.href = `/login?ref=${window.location.href}`;
          } else {
            handleNotification(method, err.data, {
              show: true,
              type: 'error',
              ...notification
            });
            resolve(err);
          }
        } else {
          // server error
          if (error.code === 'ECONNABORTED') {
            handleNotification(method, null, {
              type: 'error',
              message: 'Request time out',
            });
          } else {
            handleNotification(method, null, {
              type: 'error',
              message: error.message,
            });
          }
        }
      });
  });
}
