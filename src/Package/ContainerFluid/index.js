import React from 'react';
import PropTypes from 'prop-types';

const ContainerFluidComponent = props => {
  const { classExtend, children } = props;
  return (
    <div className={`fwork-container-fluid ${classExtend}`}>{children}</div>
  );
};

ContainerFluidComponent.propTypes = {
  classExtend: PropTypes.string
};

ContainerFluidComponent.defaultProps = {
  classExtend: ''
};

export default ContainerFluidComponent;
