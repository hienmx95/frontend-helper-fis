import React from 'react';
import Forbidden from './Forbidden';

const index = ({ classExtend, canView, children, ...props }) => {

  if (!canView) {
    return <Forbidden />;
  }

  return (
    <div className={`fwork-container-view ${classExtend}`} {...props}>
      {children}
    </div>
  );
};

export default index;
