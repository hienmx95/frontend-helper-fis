"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _this = void 0,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/ListIconResourceGroup/Flag.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconSvg = function IconSvg(width, height) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || 16,
    height: height || 16,
    viewBox: "0 0 11.486 16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement("path", {
    id: "icon",
    d: "M88.407,14.31,78.585,9.747A.834.834,0,0,0,77.4,10.5v9.1a.863.863,0,0,0,.01.133v5.1a.832.832,0,1,0,1.664,0V20.131L88.4,15.818a.833.833,0,0,0,.483-.756A.823.823,0,0,0,88.407,14.31ZM79.077,18.3V11.811l7,3.252Z",
    transform: "translate(-77.4 -9.67)",
    fill: "#5c6a82",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }));
};

var FlagIconComponent = function FlagIconComponent(props) {
  return /*#__PURE__*/_react["default"].createElement(_antd.Icon, _extends({
    component: function component() {
      return IconSvg(props.width, props.height);
    }
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 36
    }
  }));
};

FlagIconComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes["default"].string
} : {};
FlagIconComponent.defaultProps = {
  type: ''
};
var _default = FlagIconComponent;
exports["default"] = _default;
module.exports = exports.default;