import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';

const TextInputComponent = (props) => {
  const { widthPercent, name, placeholder, prefix, getFieldDecorator, label, rules, initialValue, ...rest } = props;
  return (
    <Form.Item label={label} className="fwork-form-item">
      {getFieldDecorator(name, {
        rules,
        initialValue
      })(
        <Input
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

TextInputComponent.propTypes = {
  rules: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  initialValue: PropTypes.string
};

TextInputComponent.defaultProps = {
  type: 'text',
  name: '',
  widthPercent: 100
};

export default TextInputComponent;
