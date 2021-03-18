"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icon = _interopRequireDefault(require("./icon"));

var _this = void 0,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/DeleteIcon/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DeleteIcon = function DeleteIcon(props) {
  return /*#__PURE__*/_react["default"].createElement(_antd.Icon, _extends({
    component: _icon["default"]
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 29
    }
  }));
};

var DeleteIconComponent = function DeleteIconComponent(props) {
  return /*#__PURE__*/_react["default"].createElement(_antd.Button, _extends({
    className: "fwork-btn-icon"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), /*#__PURE__*/_react["default"].createElement(DeleteIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 51
    }
  }));
};

DeleteIconComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes["default"].string
} : {};
DeleteIconComponent.defaultProps = {
  type: ''
};
var _default = DeleteIconComponent;
exports["default"] = _default;
module.exports = exports.default;