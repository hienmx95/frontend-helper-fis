var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/notification/openNotification.js";

import React from 'react';
import Remove from './icon/Remove';
import Success from './icon/Success';
import Error from './icon/Error';
import Edit from './icon/Edit';
import Warning from './icon/Warning';
import Alert from './icon/Alert';
import Comment from './icon/Comment';
import { notification } from 'antd';
import './style.scss';
export default (function (_ref) {
  var type = _ref.type,
      action = _ref.action,
      message = _ref.message,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? null : _ref$description,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 5 : _ref$duration,
      _ref$top = _ref.top,
      top = _ref$top === void 0 ? 64 : _ref$top;
  var dataIcon = {
    'success': /*#__PURE__*/React.createElement(Success, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 16
      }
    }),
    'error': /*#__PURE__*/React.createElement(Error, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 14
      }
    }),
    'comment': /*#__PURE__*/React.createElement(Comment, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 16
      }
    }),
    'alert': /*#__PURE__*/React.createElement(Alert, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 14
      }
    }),
    'warning': /*#__PURE__*/React.createElement(Warning, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 16
      }
    }),
    'edit': /*#__PURE__*/React.createElement(Edit, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }),
    'remove': /*#__PURE__*/React.createElement(Remove, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }
    })
  };
  notification.open({
    message: /*#__PURE__*/React.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: message
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 14
      }
    }),
    description: description,
    onClick: action,
    duration: duration,
    icon: dataIcon[type],
    className: "fwork-notification " + type,
    top: top
  });
});