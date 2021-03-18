import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';

const FormComponent = (props) => {
  const {placeholder, prefix, getFieldDecorator, label } = props;
  return (
    <Form.Item label={label}>
      {getFieldDecorator('username', {
        rules: [{ required: true, message: 'Please input your username!' }],
      })(
        <Input
          prefix={prefix}
          placeholder={placeholder}
        />,
      )}
    </Form.Item>
  );
};

FormComponent.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
};

FormComponent.defaultProps = {
  type: 'text',
};

const FormAntdComponent = Form.create({ name: 'coordinated' })(FormComponent);

export default FormAntdComponent;
