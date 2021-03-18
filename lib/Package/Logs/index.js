"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _fetchAPI = _interopRequireDefault(require("../../fetchAPI"));

var _antd = require("antd");

var _moment = _interopRequireDefault(require("moment"));

var _this = void 0,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/Logs/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Logs = function Logs(_ref) {
  var code = _ref.code;

  var _useState = (0, _react.useState)({}),
      logs = _useState[0],
      setLogs = _useState[1];

  (0, _react.useEffect)(function () {
    var FWORK_API_ENDPOINT = process.env.FWORK_API_ENDPOINT || process.env.REACT_APP_FWORK_API_ENDPOINT;
    var LOGGING_BACKEND = FWORK_API_ENDPOINT + '/logging';
    (0, _fetchAPI["default"])(LOGGING_BACKEND + "/" + code, 'GET').then(function (_ref2) {
      var res = _ref2.data;

      if (!res.success || !res.data) {
        return;
      }

      setLogs(res.data);
    });
  }, []);

  var convertContent = function convertContent(content) {
    return typeof content === 'boolean' ? String(content) : content;
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fwork-logs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, Object.keys(logs).map(function (key) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, key), logs[key].map(function (_ref3) {
      var actionType = _ref3.actionType,
          _ref3$data = _ref3.data,
          data = _ref3$data === void 0 ? [] : _ref3$data,
          _ref3$user = _ref3.user,
          user = _ref3$user === void 0 ? {} : _ref3$user,
          createdAt = _ref3.createdAt;

      if (!Array.isArray(data)) {
        data = [];
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "fwork-logs-item",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }
      }, /*#__PURE__*/_react["default"].createElement("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 23
        }
      }, (0, _moment["default"])(createdAt).format('hh:mm')), /*#__PURE__*/_react["default"].createElement("div", {
        className: "user-infor",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 23
        }
      }, /*#__PURE__*/_react["default"].createElement(_antd.Avatar, {
        src: user.avatar,
        size: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 25
        }
      }, user.fullName), /*#__PURE__*/_react["default"].createElement("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 25
        }
      }, user.username)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "content",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 23
        }
      }, actionType !== 2 ? actionType === 1 ? 'created' : 'deleted' : data.map(function (el, index) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: index,
          className: "content-item",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 31
          }
        }, /*#__PURE__*/_react["default"].createElement("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 33
          }
        }, el.field, ": "), /*#__PURE__*/_react["default"].createElement("div", {
          className: "pre-data",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 33
          }
        }, convertContent(el.preData)), /*#__PURE__*/_react["default"].createElement("div", {
          className: "next-data",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 33
          }
        }, convertContent(el.nextData)));
      }))));
    }));
  }));
};

var _default = Logs;
exports["default"] = _default;
module.exports = exports.default;