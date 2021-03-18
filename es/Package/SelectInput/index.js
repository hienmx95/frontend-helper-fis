var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/SelectInput/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Form, Select } from 'antd';
var Option = Select.Option;

var SelectInputComponent = function SelectInputComponent(props) {
  var options = props.options,
      getFieldDecorator = props.getFieldDecorator,
      label = props.label,
      name = props.name,
      initialValue = props.initialValue,
      rules = props.rules,
      valueKey = props.valueKey,
      labelKey = props.labelKey,
      handleChange = props.handleChange,
      widthPercent = props.widthPercent,
      styleOption = props.styleOption,
      rest = _objectWithoutPropertiesLoose(props, ["options", "getFieldDecorator", "label", "name", "initialValue", "rules", "valueKey", "labelKey", "handleChange", "widthPercent", "styleOption"]);

  return /*#__PURE__*/React.createElement(Form.Item, {
    label: label,
    style: {
      width: widthPercent + "%"
    },
    className: "fwork-form-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, getFieldDecorator(name, {
    rules: rules,
    initialValue: initialValue
  })( /*#__PURE__*/React.createElement(Select, _extends({
    onChange: handleChange,
    style: {
      width: "100%"
    }
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), options.map(function (option, index) {
    return /*#__PURE__*/React.createElement(Option, {
      style: styleOption,
      key: index,
      value: option[valueKey],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }
    }, option[labelKey]);
  }))));
};

SelectInputComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  name: PropTypes.string.isRequired,
  rules: PropTypes.array.isRequired,
  handleChange: PropTypes.func,
  type: PropTypes.string,
  widthPercent: PropTypes.number,
  initialValue: PropTypes.string
} : {};
SelectInputComponent.defaultProps = {
  type: 'text',
  widthPercent: 100,
  name: ''
};
export default SelectInputComponent;