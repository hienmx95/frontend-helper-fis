var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/ListIconResourceGroup/Star.jsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

var IconSvg = function IconSvg(width, height) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || 16,
    height: height || 16,
    viewBox: "0 0 16 15.111",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon_star",
    transform: "translate(-3 -4)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon_star-2",
    "data-name": "Icon_star",
    transform: "translate(3 4)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    id: "Path",
    d: "M7.089,13.2a1.778,1.778,0,0,1,1.821,0l2.97,1.775a.93.93,0,0,0,1.393-1l-.78-3.307a1.778,1.778,0,0,1,.574-1.758l2.609-2.234a.92.92,0,0,0-.533-1.617l-3.451-.29A1.778,1.778,0,0,1,10.206,3.7L8.86.561a.94.94,0,0,0-1.72,0L5.794,3.692A1.778,1.778,0,0,1,4.31,4.762l-3.452.29A.92.92,0,0,0,.324,6.668L2.933,8.9a1.778,1.778,0,0,1,.574,1.758l-.78,3.307a.93.93,0,0,0,1.393,1Z",
    transform: "translate(0 0)",
    fill: "#5c6a82",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }))));
};

var StarIconComponent = function StarIconComponent(props) {
  return /*#__PURE__*/React.createElement(Icon, _extends({
    component: function component() {
      return IconSvg(props.width, props.height);
    }
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 36
    }
  }));
};

StarIconComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  type: PropTypes.string
} : {};
StarIconComponent.defaultProps = {
  type: ''
};
export default StarIconComponent;