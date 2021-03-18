import React from 'react';
import PropTypes from 'prop-types';
import ContainerFormComponent from '../ContainerForm';

const ContainerComponent = (props) => {
  const {classExtend, children} = props;
  return (
    <div className={`fwork-container ${classExtend}`}>
      {children}
    </div>
  );
};

ContainerComponent.propTypes = {
  classExtend: PropTypes.string,
};

ContainerFormComponent.defaultProps = {
  classExtend: ""
};

export default ContainerComponent;
