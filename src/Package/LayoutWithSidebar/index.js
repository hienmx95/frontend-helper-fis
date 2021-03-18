import React from 'react';
import PropTypes from 'prop-types';
import ContainerFormComponent from '../ContainerForm';

const LayoutWithSidebar = props => {
  const { classExtend, children, collapsed } = props;
  const classCollapsed = collapsed ? 'collapsed' : '';

  return (
    <div className={`fwork-layout-with-sidebar ${classExtend} ${classCollapsed}`.trim()}>
      {children}
    </div>
  );
};

LayoutWithSidebar.propTypes = {
  classExtend: PropTypes.string,
  collapsed: PropTypes.bool
};

ContainerFormComponent.defaultProps = {
  classExtend: '',
  collapsed: false
};

export default LayoutWithSidebar;
