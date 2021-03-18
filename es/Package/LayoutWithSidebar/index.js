var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/LayoutWithSidebar/index.js";

import React from 'react';
import PropTypes from 'prop-types';
import ContainerFormComponent from '../ContainerForm';

var LayoutWithSidebar = function LayoutWithSidebar(props) {
  var classExtend = props.classExtend,
      children = props.children,
      collapsed = props.collapsed;
  var classCollapsed = collapsed ? 'collapsed' : '';
  return /*#__PURE__*/React.createElement("div", {
    className: ("fwork-layout-with-sidebar " + classExtend + " " + classCollapsed).trim(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, children);
};

LayoutWithSidebar.propTypes = process.env.NODE_ENV !== "production" ? {
  classExtend: PropTypes.string,
  collapsed: PropTypes.bool
} : {};
ContainerFormComponent.defaultProps = {
  classExtend: '',
  collapsed: false
};
export default LayoutWithSidebar;