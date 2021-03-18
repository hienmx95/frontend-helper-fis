import React from 'react';
import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CustomIconComponent = (props) => {
  const {to, componentIcon} = props;
  const CustomIcon = props => <Icon component={componentIcon} {...props} />;
  if (to) {
    return (
      <Link to={props.to}>
        <Button className="fwork-btn-icon" {...props}>
          <CustomIcon />
        </Button>
      </Link>
    );
  }
  return (
    <Button className="fwork-btn-icon" {...props}>
      <CustomIcon />
    </Button>
  );
};

CustomIconComponent.propTypes = {
  to: PropTypes.string
};

CustomIconComponent.defaultProps = {
  to: null
};

export default CustomIconComponent;
