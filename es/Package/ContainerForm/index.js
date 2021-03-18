var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/ContainerForm/index.js";

import React from 'react';
import PropTypes from 'prop-types';

var ContainerFormComponent = function ContainerFormComponent(props) {
  var classExtend = props.classExtend,
      children = props.children,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading;
  return /*#__PURE__*/React.createElement("div", {
    className: "fwork-container-form " + classExtend,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, children);
};

ContainerFormComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  classExtend: PropTypes.string
} : {};
ContainerFormComponent.defaultProps = {
  classExtend: ''
};
export default ContainerFormComponent;