var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/ListIconResourceGroup/Car.jsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

var IconSvg = function IconSvg(width, height) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || 16,
    height: height || 16,
    viewBox: "0 0 16 11.52",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    id: "Icons_Car",
    "data-name": "Icons / Car",
    d: "M-12.16-556.78v-1.281h-7.68v1.281H-22.4v-5.76h-.64a.961.961,0,0,1-.96-.96.961.961,0,0,1,.96-.96h1.28l.96-2.944a1.374,1.374,0,0,1,1.216-.9h7.168a1.309,1.309,0,0,1,1.217.9l.959,2.944h1.28a.96.96,0,0,1,.96.96.96.96,0,0,1-.96.96H-9.6v5.76Zm-8.32-3.2h8.96v-.64h-2.56a.96.96,0,0,1-.96-.96.959.959,0,0,1,.96-.959h2.5l-1.28-3.84h-6.208l-1.28,3.84h2.432a.96.96,0,0,1,.96.959.961.961,0,0,1-.96.96h-2.56Z",
    transform: "translate(24 568.3)",
    fill: "#5c6a82",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }));
};

var CarIconComponent = function CarIconComponent(props) {
  return /*#__PURE__*/React.createElement(Icon, _extends({
    component: function component() {
      return IconSvg(props.width, props.height);
    }
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 35
    }
  }));
};

CarIconComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  type: PropTypes.string
} : {};
CarIconComponent.defaultProps = {
  type: ''
};
export default CarIconComponent;