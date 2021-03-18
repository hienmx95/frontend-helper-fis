"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _this = void 0,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/ListIconResourceGroup/Window.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconSvg = function IconSvg(width, height) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || 16,
    height: height || 16,
    viewBox: "0 0 17.6 17.6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, /*#__PURE__*/_react["default"].createElement("g", {
    id: "Group_2",
    "data-name": "Group 2",
    transform: "translate(-299.2 -384.2)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement("path", {
    id: "Rectangle_12",
    "data-name": "Rectangle 12",
    d: "M2,0H8A0,0,0,0,1,8,0V8A0,0,0,0,1,8,8H0A0,0,0,0,1,0,8V2A2,2,0,0,1,2,0Z",
    transform: "translate(300 385)",
    fill: "none",
    stroke: "#5c6a82",
    "stroke-width": "1.6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react["default"].createElement("path", {
    id: "Rectangle_13",
    "data-name": "Rectangle 13",
    d: "M0,0H6A2,2,0,0,1,8,2V8A0,0,0,0,1,8,8H0A0,0,0,0,1,0,8V0A0,0,0,0,1,0,0Z",
    transform: "translate(308 385)",
    fill: "none",
    stroke: "#5c6a82",
    "stroke-width": "1.6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react["default"].createElement("path", {
    id: "Rectangle_14",
    "data-name": "Rectangle 14",
    d: "M0,0H8A0,0,0,0,1,8,0V8A0,0,0,0,1,8,8H2A2,2,0,0,1,0,6V0A0,0,0,0,1,0,0Z",
    transform: "translate(300 393)",
    fill: "none",
    stroke: "#5c6a82",
    "stroke-width": "1.6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react["default"].createElement("path", {
    id: "Rectangle_15",
    "data-name": "Rectangle 15",
    d: "M0,0H8A0,0,0,0,1,8,0V6A2,2,0,0,1,6,8H0A0,0,0,0,1,0,8V0A0,0,0,0,1,0,0Z",
    transform: "translate(308 393)",
    fill: "none",
    stroke: "#5c6a82",
    "stroke-width": "1.6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  })));
};

var WindowIconComponent = function WindowIconComponent(props) {
  return /*#__PURE__*/_react["default"].createElement(_antd.Icon, _extends({
    component: function component() {
      return IconSvg(props.width, props.height);
    }
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 38
    }
  }));
};

WindowIconComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes["default"].string
} : {};
WindowIconComponent.defaultProps = {
  type: ''
};
var _default = WindowIconComponent;
exports["default"] = _default;
module.exports = exports.default;