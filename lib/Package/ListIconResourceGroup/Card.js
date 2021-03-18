"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _this = void 0,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/ListIconResourceGroup/Card.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconSvg = function IconSvg(width, height) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    id: "icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: width || 16,
    height: height || 16,
    viewBox: "0 0 16 11.2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement("path", {
    id: "Shape",
    d: "M14.4,11.2H1.6A1.6,1.6,0,0,1,0,9.6v-8A1.6,1.6,0,0,1,1.6,0H14.4A1.6,1.6,0,0,1,16,1.6v8A1.6,1.6,0,0,1,14.4,11.2ZM2.4,1.6a.8.8,0,0,0-.8.8V8.8a.8.8,0,0,0,.8.8H13.6a.8.8,0,0,0,.8-.8V2.4a.8.8,0,0,0-.8-.8Z",
    transform: "translate(0 0)",
    fill: "#5c6a82",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), /*#__PURE__*/_react["default"].createElement("path", {
    id: "Path",
    d: "M0,0H16V1.6H0Z",
    transform: "translate(0 3.2)",
    fill: "#5c6a82",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), /*#__PURE__*/_react["default"].createElement("path", {
    id: "Path-2",
    "data-name": "Path",
    d: "M0,0H4.8V.8H0Z",
    transform: "translate(3.2 7.2)",
    fill: "#5c6a82",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }));
};

var CardIconComponent = function CardIconComponent(props) {
  return /*#__PURE__*/_react["default"].createElement(_antd.Icon, _extends({
    component: function component() {
      return IconSvg(props.width, props.height);
    }
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 36
    }
  }));
};

CardIconComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes["default"].string
} : {};
CardIconComponent.defaultProps = {
  type: ''
};
var _default = CardIconComponent;
exports["default"] = _default;
module.exports = exports.default;