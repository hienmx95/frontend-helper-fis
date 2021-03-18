"use strict";

exports.__esModule = true;
exports.chooseCompany = exports.logout = exports.setCurrentUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _actionTypes = require("../constants/actionTypes");

var _localStorageCookies = require("../../localStorageCookies");

var _fetchAPI = _interopRequireDefault(require("../../fetchAPI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var axios = require('axios');

var FWORK_API_ENDPOINT = process.env.FWORK_API_ENDPOINT || process.env.REACT_APP_FWORK_API_ENDPOINT;
var baseURL = FWORK_API_ENDPOINT + '/portal';

var setCurrentUser = function setCurrentUser() {
  return function (dispatch) {
    var url = "user";
    var token = (0, _localStorageCookies.getToken)();

    if (!token) {
      dispatch({
        type: _actionTypes.CLEAR_CURRENT_USER
      });
      return;
    }

    dispatch({
      type: _actionTypes.LOADING_USER_INFO
    });
    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer " + token
    };
    var options = {
      baseURL: baseURL,
      url: url,
      method: 'GET',
      headers: headers,
      timeout: 30000
    };
    axios(options).then(function (response) {
      if (response.data.data && response.data.data.newToken) {
        (0, _localStorageCookies.setTokenExpire)(response.data.data.newToken, 30);
      }

      try {
        dispatch({
          type: _actionTypes.SET_CURRENT_USER,
          payload: response.data.data ? response.data.data : response.data.result
        });
      } catch (e) {
        console.error('setCurrentUser ERR: ', e);
      }
    })["catch"](function (error) {
      if (error.response && error.response.status === 401) {
        (0, _localStorageCookies.removeToken)();
        window.location.href = "/login?ref=" + window.location.href;
      } else {
        console.error('setCurrentUser error: ', error);
      }
    });
  };
};

exports.setCurrentUser = setCurrentUser;

var logout = function logout() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee(dispatch) {
      var url, token, headers, options;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = "/logout";
              token = (0, _localStorageCookies.getToken)();

              if (token) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              (0, _localStorageCookies.removeToken)();
              headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer " + token
              };
              options = {
                baseURL: baseURL,
                url: url,
                method: 'POST',
                headers: headers,
                timeout: 5000
              };

              if (localStorage.getItem('id-adfs-token')) {
                options.data = {
                  idAdfsToken: localStorage.getItem('id-adfs-token')
                };
                localStorage.removeItem('id-adfs-token');
              }

              if (localStorage.getItem('keyprj')) {
                localStorage.removeItem('keyprj');
              }

              _context.next = 11;
              return axios(options);

            case 11:
              window.location.href = '/login';

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.logout = logout;

var chooseCompany = function chooseCompany(params) {
  if (params === void 0) {
    params = {};
  }

  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2(dispatch) {
      var FWORK_API_ENDPOINT, res, data;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              FWORK_API_ENDPOINT = process.env.FWORK_API_ENDPOINT || process.env.REACT_APP_FWORK_API_ENDPOINT;
              _context2.next = 3;
              return (0, _fetchAPI["default"])(FWORK_API_ENDPOINT + '/portal/choose-company', 'POST', params);

            case 3:
              res = _context2.sent;
              data = res.data;

              if (data && data.success) {
                window.location.href = '/app-menu';
              } else {
                dispatch(logout()); // notifyError(data.message); !!!!!!!!!!!!!!
                // history.push('/login');
              }

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

exports.chooseCompany = chooseCompany;