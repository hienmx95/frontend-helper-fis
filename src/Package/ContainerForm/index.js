import React from 'react';
import PropTypes from 'prop-types';

const ContainerFormComponent = (props) => {
  const { classExtend, children, loading = false } = props;

  return (
    <div className={`fwork-container-form ${classExtend}`}>{children}</div>
  );
};

ContainerFormComponent.propTypes = {
  classExtend: PropTypes.string
};

ContainerFormComponent.defaultProps = {
  classExtend: ''
};

export default ContainerFormComponent;
