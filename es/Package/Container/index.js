var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/Container/index.js";

import React from 'react';
import PropTypes from 'prop-types';
import ContainerFormComponent from '../ContainerForm';

var ContainerComponent = function ContainerComponent(props) {
  var classExtend = props.classExtend,
      children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "fwork-container " + classExtend,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, children);
};

ContainerComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  classExtend: PropTypes.string
} : {};
ContainerFormComponent.defaultProps = {
  classExtend: ""
};
export default ContainerComponent;