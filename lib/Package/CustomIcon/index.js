"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _this = void 0,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/CustomIcon/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CustomIconComponent = function CustomIconComponent(props) {
  var to = props.to,
      componentIcon = props.componentIcon;

  var CustomIcon = function CustomIcon(props) {
    return /*#__PURE__*/_react["default"].createElement(_antd.Icon, _extends({
      component: componentIcon
    }, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 31
      }
    }));
  };

  if (to) {
    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      to: props.to,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }
    }, /*#__PURE__*/_react["default"].createElement(_antd.Button, _extends({
      className: "fwork-btn-icon"
    }, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }), /*#__PURE__*/_react["default"].createElement(CustomIcon, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    })));
  }

  return /*#__PURE__*/_react["default"].createElement(_antd.Button, _extends({
    className: "fwork-btn-icon"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }), /*#__PURE__*/_react["default"].createElement(CustomIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }));
};

CustomIconComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  to: _propTypes["default"].string
} : {};
CustomIconComponent.defaultProps = {
  to: null
};
var _default = CustomIconComponent;
exports["default"] = _default;
module.exports = exports.default;