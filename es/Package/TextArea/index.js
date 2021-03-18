var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/TextArea/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
var TextArea = Input.TextArea;

var TextAreaComponent = function TextAreaComponent(props) {
  var widthPercent = props.widthPercent,
      name = props.name,
      placeholder = props.placeholder,
      prefix = props.prefix,
      getFieldDecorator = props.getFieldDecorator,
      label = props.label,
      rules = props.rules,
      initialValue = props.initialValue,
      rest = _objectWithoutPropertiesLoose(props, ["widthPercent", "name", "placeholder", "prefix", "getFieldDecorator", "label", "rules", "initialValue"]);

  return /*#__PURE__*/React.createElement(Form.Item, {
    label: label,
    className: "fwork-form-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, getFieldDecorator(name, {
    rules: rules,
    initialValue: initialValue
  })( /*#__PURE__*/React.createElement(TextArea // className="fwork-input"
  , _extends({
    prefix: prefix,
    placeholder: placeholder,
    style: {
      width: widthPercent + "%"
    }
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }))));
};

TextAreaComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  rules: PropTypes.array.required,
  name: PropTypes.string.required,
  type: PropTypes.string
} : {};
TextAreaComponent.defaultProps = {
  type: 'text',
  name: '',
  widthPercent: 100
};
export default TextAreaComponent;