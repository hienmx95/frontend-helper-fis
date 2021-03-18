"use strict";

exports.__esModule = true;
exports.getSettings = getSettings;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _actionTypes = require("../constants/actionTypes");

var _fetchAPI = _interopRequireDefault(require("../../fetchAPI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getSettings() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee(dispatch) {
      var FWORK_API_ENDPOINT, baseURL, projectId, url, method, service;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(fetching());
              FWORK_API_ENDPOINT = process.env.FWORK_API_ENDPOINT || process.env.REACT_APP_FWORK_API_ENDPOINT;
              baseURL = FWORK_API_ENDPOINT + '/setting'; // Default = process.env.URL_BACKEND

              projectId = process.env.PROJECT_CODE;
              url = "/setting/" + projectId;
              method = 'GET';
              service = {
                baseURL: baseURL,
                url: url,
                method: method
              };
              (0, _fetchAPI["default"])(service).then(function (res) {
                if (res.data.result && res.data.success) {
                  dispatch(success(res.data.result.settings));
                } else {
                  dispatch(failure());
                }
              });

            case 8:
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

  function fetching() {
    return {
      type: _actionTypes.FETCH_SETTING
    };
  }

  function success(payload) {
    return {
      type: _actionTypes.FETCH_SETTING_SUCCESS,
      payload: payload
    };
  }

  function failure() {
    return {
      type: _actionTypes.FETCH_SETTING_FAILURE
    };
  }
}