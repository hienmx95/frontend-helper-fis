import React from 'react';
import PropTypes from 'prop-types';
import { Form, Radio } from 'antd';

const RadioComponent = (props) => {
  const { options, name, getFieldDecorator, label, rules, initialValue, ...rest } = props;
  return (
    <Form.Item label={label} className="fwork-form-item">
      {getFieldDecorator(name, {
        rules,
        initialValue
      })(
        <Radio.Group
          className='fwork-radio'
          options={options}
          {...rest}
        />
      )}
    </Form.Item>
  );
};

RadioComponent.propTypes = {
  rules: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

RadioComponent.defaultProps = {
  name: '',
  options: [],
  widthPercent: 100
};

export default RadioComponent;
