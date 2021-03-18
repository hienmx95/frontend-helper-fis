import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
const currentService = window.location.pathname.split('/')[1];

const ButtonComponent = props => {
  const { children, type = 'default', ...rest } = props;

  return (
    <Button {...rest} className={`fwork-btn fwork-btn-${type} ${currentService}`}>
      {children}
    </Button>
  );
};

ButtonComponent.propTypes = {
  type: PropTypes.string
};

export default ButtonComponent;