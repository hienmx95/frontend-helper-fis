import React from 'react';
import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import DeleteIconSvg from './icon';

const DeleteIcon = props => <Icon component={DeleteIconSvg} {...props} />;

const DeleteIconComponent = props => {
  return (
    <Button className="fwork-btn-icon" {...props}><DeleteIcon /></Button>
  );
};

DeleteIconComponent.propTypes = {
  type: PropTypes.string
};

DeleteIconComponent.defaultProps = {
  type: ''
};

export default DeleteIconComponent;
