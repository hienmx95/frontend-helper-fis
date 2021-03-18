"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _this = void 0,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/ListIconResourceGroup/Book.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconSvg = function IconSvg(width, height) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || 16,
    height: height || 16,
    viewBox: "0 0 13.401 16.4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement("g", {
    id: "icon_book",
    transform: "translate(434.7 -1493.8)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react["default"].createElement("path", {
    id: "Path",
    d: "M30.872,11.4H20.765a2.164,2.164,0,0,0-1.615.629,2.319,2.319,0,0,0-.65,1.552V25.114A2.2,2.2,0,0,0,20.765,27.4H30.872a.618.618,0,0,0,.629-.629V12.029A.631.631,0,0,0,30.872,11.4Zm-.629,14.763H20.765a1.017,1.017,0,0,1,0-2.034h9.478Zm0-3.292H20.765a2.313,2.313,0,0,0-1.007.21V13.686a1.145,1.145,0,0,1,.273-.755,1.014,1.014,0,0,1,.734-.273h9.478Z",
    transform: "translate(-453 1482.6)",
    fill: "#5c6a82",
    stroke: "#5c6a82",
    "stroke-width": "0.4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), /*#__PURE__*/_react["default"].createElement("path", {
    id: "Path-2",
    "data-name": "Path",
    d: "M33.929,28.058h5.347a.629.629,0,1,0,0-1.258H33.929a.618.618,0,0,0-.629.629A.631.631,0,0,0,33.929,28.058Z",
    transform: "translate(-464.696 1470.429)",
    fill: "#5c6a82",
    stroke: "#5c6a82",
    "stroke-width": "0.3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), /*#__PURE__*/_react["default"].createElement("path", {
    id: "Path-3",
    "data-name": "Path",
    d: "M33.929,42.058h5.347a.629.629,0,0,0,0-1.258H33.929a.618.618,0,0,0-.629.629A.631.631,0,0,0,33.929,42.058Z",
    transform: "translate(-464.696 1459.365)",
    fill: "#5c6a82",
    stroke: "#5c6a82",
    "stroke-width": "0.3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  })));
};

var BookIconComponent = function BookIconComponent(props) {
  return /*#__PURE__*/_react["default"].createElement(_antd.Icon, _extends({
    component: function component() {
      return IconSvg(props.width, props.height);
    }
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 36
    }
  }));
};

BookIconComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes["default"].string
} : {};
BookIconComponent.defaultProps = {
  type: ''
};
var _default = BookIconComponent;
exports["default"] = _default;
module.exports = exports.default;