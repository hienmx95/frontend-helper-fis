import React from 'react';
import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import EditIconSvg from './icon';
import { Link } from 'react-router-dom';

const EditIcon = props => <Icon component={EditIconSvg} {...props} />;

const EditIconComponent = props => {
  return (
    <Link to={props.to}>
      <Button className="fwork-btn-icon" {...props}>
        <EditIcon />
      </Button>
    </Link>
  );
};

EditIconComponent.propTypes = {
  to: PropTypes.string.isRequired,
};

EditIconComponent.defaultProps = {
  to: '/'
};

export default EditIconComponent;
