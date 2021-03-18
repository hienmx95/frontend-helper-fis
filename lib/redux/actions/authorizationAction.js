"use strict";

exports.__esModule = true;
exports.getPermissionForUser = getPermissionForUser;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _actionTypes = require("../constants/actionTypes");

var _localStorageCookies = require("../../localStorageCookies");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var axios = require('axios');

function getPermissionForUser() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee(dispatch) {
      var FWORK_API_ENDPOINT, IAM_BACKEND_PERMISSION, PROJECT_CODE, token, headers, url, options;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              FWORK_API_ENDPOINT = process.env.FWORK_API_ENDPOINT || process.env.REACT_APP_FWORK_API_ENDPOINT;
              IAM_BACKEND_PERMISSION = FWORK_API_ENDPOINT + '/iam/authorization/';
              PROJECT_CODE = process.env.PROJECT_CODE;
              token = (0, _localStorageCookies.getToken)();

              if (token) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return");

            case 6:
              headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer " + token
              };
              url = IAM_BACKEND_PERMISSION + PROJECT_CODE;
              options = {
                url: url,
                method: 'GET',
                headers: headers,
                timeout: 30000
              };
              axios(options).then(function (response) {
                try {
                  dispatch({
                    type: _actionTypes.FETCH_PERMISSIONS_SUCCESS,
                    payload: response.data.result
                  });
                } catch (e) {
                  console.error('FETCH_PERMISSIONS_SUCCESS ERR: ', e);
                }
              })["catch"](function (error) {
                console.error('error fetch permissions: ', error);
              });

            case 10:
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
}