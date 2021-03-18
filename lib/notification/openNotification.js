"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Remove = _interopRequireDefault(require("./icon/Remove"));

var _Success = _interopRequireDefault(require("./icon/Success"));

var _Error = _interopRequireDefault(require("./icon/Error"));

var _Edit = _interopRequireDefault(require("./icon/Edit"));

var _Warning = _interopRequireDefault(require("./icon/Warning"));

var _Alert = _interopRequireDefault(require("./icon/Alert"));

var _Comment = _interopRequireDefault(require("./icon/Comment"));

var _antd = require("antd");

require("./style.scss");

var _this = void 0,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/notification/openNotification.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
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
    'success': /*#__PURE__*/_react["default"].createElement(_Success["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 16
      }
    }),
    'error': /*#__PURE__*/_react["default"].createElement(_Error["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 14
      }
    }),
    'comment': /*#__PURE__*/_react["default"].createElement(_Comment["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 16
      }
    }),
    'alert': /*#__PURE__*/_react["default"].createElement(_Alert["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 14
      }
    }),
    'warning': /*#__PURE__*/_react["default"].createElement(_Warning["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 16
      }
    }),
    'edit': /*#__PURE__*/_react["default"].createElement(_Edit["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }),
    'remove': /*#__PURE__*/_react["default"].createElement(_Remove["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }
    })
  };

  _antd.notification.open({
    message: /*#__PURE__*/_react["default"].createElement("p", {
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
};

exports["default"] = _default;
module.exports = exports.default;