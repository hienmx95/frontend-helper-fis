"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _this = void 0,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/icons/Radio.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Radio = function Radio(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    "data-name": "Radio / Checked",
    viewBox: "0 0 20 20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h20v20H0z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "7.5",
    cy: "7.5",
    r: "7.5",
    fill: "#fff",
    stroke: "#5c6a82",
    strokeWidth: "2",
    transform: "translate(2.5 2.5)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "3.75",
    cy: "3.75",
    r: "3.75",
    className: "cls-3",
    "data-name": "Ellipse",
    transform: "translate(6.25 6.25)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }));
};

var _default = Radio;
exports["default"] = _default;
module.exports = exports.default;