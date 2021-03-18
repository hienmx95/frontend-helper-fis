import React from 'react';
import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import CloseIconSvg from './icon'

const CloseIcon = props => <Icon component={CloseIconSvg} {...props} />;

const CloseIconComponent = (props) => {
  return (
    <Button className="fwork-btn-icon" {...props}><CloseIcon/></Button>
  );
};

CloseIconComponent.propTypes = {
  type: PropTypes.string,
};

CloseIconComponent.defaultProps = {
  type: '',
};


export default CloseIconComponent;
