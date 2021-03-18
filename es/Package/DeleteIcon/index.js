var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/DeleteIcon/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import DeleteIconSvg from './icon';

var DeleteIcon = function DeleteIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, _extends({
    component: DeleteIconSvg
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 29
    }
  }));
};

var DeleteIconComponent = function DeleteIconComponent(props) {
  return /*#__PURE__*/React.createElement(Button, _extends({
    className: "fwork-btn-icon"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), /*#__PURE__*/React.createElement(DeleteIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 51
    }
  }));
};

DeleteIconComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  type: PropTypes.string
} : {};
DeleteIconComponent.defaultProps = {
  type: ''
};
export default DeleteIconComponent;