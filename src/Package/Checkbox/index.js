import React from 'react';
import PropTypes from 'prop-types';
import { Form, Checkbox } from 'antd';

const CheckboxComponent = props => {
  const {
    options,
    name,
    getFieldDecorator,
    label,
    initialValue,
    rules,
    ...rest
  } = props;
  return (
    <Form.Item label={label} className="fwork-form-item">
      {getFieldDecorator(name, {
        rules,
        initialValue
      })(
        <Checkbox.Group
          className="fwork-checkbox"
          options={options}
          {...rest}
        />
      )}
    </Form.Item>
  );
};

CheckboxComponent.propTypes = {
  rules: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

CheckboxComponent.defaultProps = {
  name: '',
  options: [],
  widthPercent: 100
};

export default CheckboxComponent;
