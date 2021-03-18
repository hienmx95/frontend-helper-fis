import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';

const { TextArea } = Input;

const TextAreaComponent = props => {
  const {
    widthPercent,
    name,
    placeholder,
    prefix,
    getFieldDecorator,
    label,
    rules,
    initialValue,
    ...rest
  } = props;
  return (
    <Form.Item label={label} className="fwork-form-item">
      {getFieldDecorator(name, {
        rules,
        initialValue
      })(
        <TextArea
          // className="fwork-input"
          prefix={prefix}
          placeholder={placeholder}
          style={{ width: `${widthPercent}%` }}
          {...rest}
        />
      )}
    </Form.Item>
  );
};

TextAreaComponent.propTypes = {
  rules: PropTypes.array.required,
  name: PropTypes.string.required,
  type: PropTypes.string
};

TextAreaComponent.defaultProps = {
  type: 'text',
  name: '',
  widthPercent: 100
};

export default TextAreaComponent;
