"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _this = void 0,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/ListIconResourceGroup/Heart.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconSvg = function IconSvg(width, height) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    id: "Icon_love",
    xmlns: "http://www.w3.org/2000/svg",
    width: width || 16,
    height: height || 16,
    viewBox: "0 0 18 16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement("path", {
    id: "Path",
    d: "M1.379,8.274A4.841,4.841,0,0,1,0,4.889,4.963,4.963,0,0,1,9,2.077a4.963,4.963,0,0,1,9,2.812A4.845,4.845,0,0,1,16.493,8.4L9,16Z",
    fill: "#5c6a82",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }));
};

var HeartIconComponent = function HeartIconComponent(props) {
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

HeartIconComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes["default"].string
} : {};
HeartIconComponent.defaultProps = {
  type: ''
};
var _default = HeartIconComponent;
exports["default"] = _default;
module.exports = exports.default;