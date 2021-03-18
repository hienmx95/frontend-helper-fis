var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/Logs/index.js";

import React, { useEffect, useState } from 'react';
import fetchAPI from '../../fetchAPI';
import { Avatar } from 'antd';
import moment from 'moment';

var Logs = function Logs(_ref) {
  var code = _ref.code;

  var _useState = useState({}),
      logs = _useState[0],
      setLogs = _useState[1];

  useEffect(function () {
    var FWORK_API_ENDPOINT = process.env.FWORK_API_ENDPOINT || process.env.REACT_APP_FWORK_API_ENDPOINT;
    var LOGGING_BACKEND = FWORK_API_ENDPOINT + '/logging';
    fetchAPI(LOGGING_BACKEND + "/" + code, 'GET').then(function (_ref2) {
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

  return /*#__PURE__*/React.createElement("div", {
    className: "fwork-logs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, Object.keys(logs).map(function (key) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
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

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "fwork-logs-item",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }
      }, /*#__PURE__*/React.createElement("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 23
        }
      }, moment(createdAt).format('hh:mm')), /*#__PURE__*/React.createElement("div", {
        className: "user-infor",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 23
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        src: user.avatar,
        size: 24,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 25
        }
      }, user.fullName), /*#__PURE__*/React.createElement("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 25
        }
      }, user.username)), /*#__PURE__*/React.createElement("div", {
        className: "content",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 23
        }
      }, actionType !== 2 ? actionType === 1 ? 'created' : 'deleted' : data.map(function (el, index) {
        return /*#__PURE__*/React.createElement("div", {
          key: index,
          className: "content-item",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 31
          }
        }, /*#__PURE__*/React.createElement("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 33
          }
        }, el.field, ": "), /*#__PURE__*/React.createElement("div", {
          className: "pre-data",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 33
          }
        }, convertContent(el.preData)), /*#__PURE__*/React.createElement("div", {
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

export default Logs;