import _regeneratorRuntime from "@babel/runtime/regenerator";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import axios from 'axios';
import { getToken } from '../localStorageCookies';
import { notification } from 'antd';
var token = getToken();
export default function (config) {
  if (typeof config === 'function') {
    config = {};
  }

  var FWORK_API_ENDPOINT = process.env.FWORK_API_ENDPOINT || process.env.REACT_APP_FWORK_API_ENDPOINT;
  var defaultConfig = {
    baseURL: FWORK_API_ENDPOINT + '/storage',
    url: '/multiple-upload/files',
    data: {},
    method: 'post',
    headers: {
      'content-type': 'multipart/form-data',
      Authorization: "Bearer " + token
    }
  };
  config = Object.assign({}, defaultConfig, config);
  return new Promise(function (resolve) {
    axios(config).then( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(response) {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                resolve(response.data);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }())["catch"](function (error) {
      if (error.response) {
        var err = error.response;
        resolve(err);
      } else {
        // server error
        console.log('Error: ', error.message, error.request, ' --- ', error.code);

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
    description: description,
    duration: 2,
    style: {
      width: 350,
      marginLeft: 35,
      marginTop: 45
    }
  });
}