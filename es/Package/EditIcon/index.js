var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/EditIcon/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import EditIconSvg from './icon';
import { Link } from 'react-router-dom';

var EditIcon = function EditIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, _extends({
    component: EditIconSvg
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 27
    }
  }));
};

var EditIconComponent = function EditIconComponent(props) {
  return /*#__PURE__*/React.createElement(Link, {
    to: props.to,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement(Button, _extends({
    className: "fwork-btn-icon"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), /*#__PURE__*/React.createElement(EditIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })));
};

EditIconComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  to: PropTypes.string.isRequired
} : {};
EditIconComponent.defaultProps = {
  to: '/'
};
export default EditIconComponent;