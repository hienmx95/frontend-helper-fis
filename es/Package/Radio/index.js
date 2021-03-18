var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/Radio/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Form, Radio } from 'antd';

var RadioComponent = function RadioComponent(props) {
  var options = props.options,
      name = props.name,
      getFieldDecorator = props.getFieldDecorator,
      label = props.label,
      rules = props.rules,
      initialValue = props.initialValue,
      rest = _objectWithoutPropertiesLoose(props, ["options", "name", "getFieldDecorator", "label", "rules", "initialValue"]);

  return /*#__PURE__*/React.createElement(Form.Item, {
    label: label,
    className: "fwork-form-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, getFieldDecorator(name, {
    rules: rules,
    initialValue: initialValue
  })( /*#__PURE__*/React.createElement(Radio.Group, _extends({
    className: "fwork-radio",
    options: options
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }))));
};

RadioComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  rules: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
} : {};
RadioComponent.defaultProps = {
  name: '',
  options: [],
  widthPercent: 100
};
export default RadioComponent;