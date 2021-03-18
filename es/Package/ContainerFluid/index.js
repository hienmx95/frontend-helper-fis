var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/ContainerFluid/index.js";

import React from 'react';
import PropTypes from 'prop-types';

var ContainerFluidComponent = function ContainerFluidComponent(props) {
  var classExtend = props.classExtend,
      children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "fwork-container-fluid " + classExtend,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, children);
};

ContainerFluidComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  classExtend: PropTypes.string
} : {};
ContainerFluidComponent.defaultProps = {
  classExtend: ''
};
export default ContainerFluidComponent;