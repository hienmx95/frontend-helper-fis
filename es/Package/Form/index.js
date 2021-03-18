var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/Form/index.js";

import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';

var FormComponent = function FormComponent(props) {
  var placeholder = props.placeholder,
      prefix = props.prefix,
      getFieldDecorator = props.getFieldDecorator,
      label = props.label;
  return /*#__PURE__*/React.createElement(Form.Item, {
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
  })( /*#__PURE__*/React.createElement(Input, {
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
  name: PropTypes.string,
  type: PropTypes.string
} : {};
FormComponent.defaultProps = {
  type: 'text'
};
var FormAntdComponent = Form.create({
  name: 'coordinated'
})(FormComponent);
export default FormAntdComponent;