"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

var _this = void 0,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/Form/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FormComponent = function FormComponent(props) {
  var placeholder = props.placeholder,
      prefix = props.prefix,
      getFieldDecorator = props.getFieldDecorator,
      label = props.label;
  return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, {
    label: label,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, getFieldDecorator('username', {
    rules: [{
      required: true,
      message: 'Please input your username!'
    }]
  })( /*#__PURE__*/_react["default"].createElement(Input, {
    prefix: prefix,
    placeholder: placeholder,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  })));
};

FormComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  name: _propTypes["default"].string,
  type: _propTypes["default"].string
} : {};
FormComponent.defaultProps = {
  type: 'text'
};

var FormAntdComponent = _antd.Form.create({
  name: 'coordinated'
})(FormComponent);

var _default = FormAntdComponent;
exports["default"] = _default;
module.exports = exports.default;