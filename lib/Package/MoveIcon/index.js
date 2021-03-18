"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _this = void 0,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/MoveIcon/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconSvg = function IconSvg(width, height) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || 12,
    height: height || 12,
    viewBox: "0 0 12 12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, /*#__PURE__*/_react["default"].createElement("g", {
    id: "icon_move",
    transform: "translate(12) rotate(90)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement("path", {
    id: "Path",
    d: "M2.381,8.71a.748.748,0,0,0,.414.263.8.8,0,0,0,.408,0,.748.748,0,0,0,.416-.264L5.776,6.642a.712.712,0,0,0,0-1.037l-.024-.023a.788.788,0,0,0-1.081,0l-.889.852V.75A.749.749,0,0,0,3.034,0H2.966a.749.749,0,0,0-.748.75V6.435l-.889-.852a.788.788,0,0,0-1.081,0l-.024.023a.712.712,0,0,0,0,1.037Z",
    transform: "translate(0 3)",
    fill: "#5c6a82",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react["default"].createElement("path", {
    id: "Path-2",
    "data-name": "Path",
    d: "M3.619.29A.748.748,0,0,0,3.2.027a.8.8,0,0,0-.408,0A.747.747,0,0,0,2.381.29L.224,2.358a.712.712,0,0,0,0,1.037l.024.023a.788.788,0,0,0,1.081,0l.889-.852V8.25A.749.749,0,0,0,2.966,9h.068a.749.749,0,0,0,.748-.75V2.565l.889.852a.788.788,0,0,0,1.081,0l.024-.023a.712.712,0,0,0,0-1.037Z",
    transform: "translate(6 0)",
    fill: "#5c6a82",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  })));
};

var MoveIconComponent = function MoveIconComponent(props) {
  return /*#__PURE__*/_react["default"].createElement(_antd.Button, _extends({
    className: "fwork-btn-icon"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 36
    }
  }), /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
    component: function component() {
      return IconSvg(props.width, props.height);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 82
    }
  }));
};

MoveIconComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes["default"].string
} : {};
MoveIconComponent.defaultProps = {
  type: ''
};
var _default = MoveIconComponent;
exports["default"] = _default;
module.exports = exports.default;