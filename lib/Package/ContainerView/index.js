"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Forbidden = _interopRequireDefault(require("./Forbidden"));

var _this = void 0,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/ContainerView/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var index = function index(_ref) {
  var classExtend = _ref.classExtend,
      canView = _ref.canView,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["classExtend", "canView", "children"]);

  if (!canView) {
    return /*#__PURE__*/_react["default"].createElement(_Forbidden["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 12
      }
    });
  }

  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: "fwork-container-view " + classExtend
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }), children);
};

var _default = index;
exports["default"] = _default;
module.exports = exports.default;