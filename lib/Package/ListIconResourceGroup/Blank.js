"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _this = void 0,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/ListIconResourceGroup/Blank.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconSvg = function IconSvg(width, height) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    id: "Icon_blank",
    xmlns: "http://www.w3.org/2000/svg",
    width: width || 16,
    height: height || 16,
    viewBox: "0 0 16 16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement("path", {
    id: "Shape",
    d: "M11.2,16H1.6A1.6,1.6,0,0,1,0,14.4V1.6A1.6,1.6,0,0,1,1.6,0h8l3.2,3.2V14.4A1.6,1.6,0,0,1,11.2,16ZM2.4,1.6a.8.8,0,0,0-.8.8V13.6a.8.8,0,0,0,.8.8h8a.8.8,0,0,0,.8-.8V4.8H8V1.6Zm7.2,0V3.2h1.6Z",
    transform: "translate(0 0)",
    fill: "#5c6a82",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }));
};

var BlankIconComponent = function BlankIconComponent(props) {
  return /*#__PURE__*/_react["default"].createElement(_antd.Icon, _extends({
    component: function component() {
      return IconSvg(props.width, props.height);
    }
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 37
    }
  }));
};

BlankIconComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes["default"].string
} : {};
BlankIconComponent.defaultProps = {
  type: ''
};
var _default = BlankIconComponent;
exports["default"] = _default;
module.exports = exports.default;