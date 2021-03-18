import React from 'react';
import PropTypes from 'prop-types';
import { Form, Select } from 'antd';
const { Option } = Select;

const SelectInputComponent = (props) => {
  const { options, getFieldDecorator, label, name, initialValue, rules, valueKey, labelKey, handleChange, widthPercent, styleOption, ...rest } = props;
  return (
    <Form.Item label={label} style={{ width: `${widthPercent}%` }} className="fwork-form-item">
      {getFieldDecorator(name, {
        rules,
        initialValue
      })(
        <Select
          onChange={handleChange}
          style={{ width: `100%` }}
          {...rest}
        >
          {
            options.map((option, index) => (
              <Option style={styleOption} key={index} value={option[valueKey]}>{option[labelKey]}</Option>
            ))
          }
        </Select>
      )}
    </Form.Item>
  );
};

SelectInputComponent.propTypes = {
  name: PropTypes.string.isRequired,
  rules: PropTypes.array.isRequired,
  handleChange: PropTypes.func,
  type: PropTypes.string,
  widthPercent: PropTypes.number,
  initialValue: PropTypes.string
};

SelectInputComponent.defaultProps = {
  type: 'text',
  widthPercent: 100,
  name: ''
};

export default SelectInputComponent;
