'use strict';

exports.__esModule = true;
exports["default"] = _default;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _localStorageCookies = require("../localStorageCookies");

var _notification = _interopRequireDefault(require("../notification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var axios = require('axios');

function _default(url, method, data, params, baseURL, notification) {
  if (method === void 0) {
    method = 'POST';
  }

  if (data === void 0) {
    data = null;
  }

  if (params === void 0) {
    params = {};
  }

  if (baseURL === void 0) {
    baseURL = null;
  }

  if (notification === void 0) {
    notification = {};
  }

  var serviceName = window.location.pathname.split('/')[1];
  var FWORK_API_ENDPOINT = process.env.FWORK_API_ENDPOINT || process.env.REACT_APP_FWORK_API_ENDPOINT;
  var BACKEND_ENDPOINT = FWORK_API_ENDPOINT + ("/" + serviceName);
  var token = (0, _localStorageCookies.getToken)();
  baseURL = baseURL ? baseURL : BACKEND_ENDPOINT;

  if (typeof url === 'object') {
    baseURL = url.hasOwnProperty('baseURL') ? url.baseURL : BACKEND_ENDPOINT;
    params = url.hasOwnProperty('params') ? url.params : {};
    data = url.hasOwnProperty('body') ? url.body : null;
    method = url.hasOwnProperty('method') ? url.method : 'POST';
    notification = url.hasOwnProperty('notification') ? url.notification : {};
    url = url.hasOwnProperty('url') ? url.url : '/';
  }

  var headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };

  if (token) {
    headers.Authorization = "Bearer " + token;
  }

  var options = {
    baseURL: baseURL,
    url: url,
    method: method,
    headers: headers,
    params: params,
    data: data,
    timeout: 30000
  };
  return new Promise(function (resolve) {
    axios(options).then( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee(response) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (response.data.data && response.data.data.newToken) {
                  (0, _localStorageCookies.setTokenExpire)(response.data.data.newToken, 30);
                }

                (0, _notification["default"])(method, response.data, notification);
                resolve(response);

              case 3:
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

        if (err.status === 401) {
          (0, _localStorageCookies.removeToken)();
          window.location.href = "/login?ref=" + window.location.href;
        } else {
          (0, _notification["default"])(method, err.data, _extends({
            show: true,
            type: 'error'
          }, notification));
          resolve(err);
        }
      } else {
        // server error
        if (error.code === 'ECONNABORTED') {
          (0, _notification["default"])(method, null, {
            type: 'error',
            message: 'Request time out'
          });
        } else {
          (0, _notification["default"])(method, null, {
            type: 'error',
            message: error.message
          });
        }
      }
    });
  });
}

module.exports = exports.default;