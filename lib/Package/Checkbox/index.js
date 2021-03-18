"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

var _this = void 0,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/Checkbox/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CheckboxComponent = function CheckboxComponent(props) {
  var options = props.options,
      name = props.name,
      getFieldDecorator = props.getFieldDecorator,
      label = props.label,
      initialValue = props.initialValue,
      rules = props.rules,
      rest = _objectWithoutPropertiesLoose(props, ["options", "name", "getFieldDecorator", "label", "initialValue", "rules"]);

  return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, {
    label: label,
    className: "fwork-form-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, getFieldDecorator(name, {
    rules: rules,
    initialValue: initialValue
  })( /*#__PURE__*/_react["default"].createElement(_antd.Checkbox.Group, _extends({
    className: "fwork-checkbox",
    options: options
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }))));
};

CheckboxComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  rules: _propTypes["default"].array.isRequired,
  name: _propTypes["default"].string.isRequired,
  options: _propTypes["default"].array.isRequired
} : {};
CheckboxComponent.defaultProps = {
  name: '',
  options: [],
  widthPercent: 100
};
var _default = CheckboxComponent;
exports["default"] = _default;
module.exports = exports.default;