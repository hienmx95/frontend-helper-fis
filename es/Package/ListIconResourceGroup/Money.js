var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/ListIconResourceGroup/Money.jsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

var IconSvg = function IconSvg(width, height) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || 16,
    height: height || 16,
    viewBox: "0 0 8.227 16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon_money",
    transform: "translate(-8 -4)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("path", {
    id: "Path",
    d: "M5.8,10.969a1.515,1.515,0,0,0-.387-1.094,3.386,3.386,0,0,0-1.3-.757,16.05,16.05,0,0,1-1.582-.681,5.326,5.326,0,0,1-1.144-.782,3.274,3.274,0,0,1-.74-1.043A3.536,3.536,0,0,1,.387,5.19,3.155,3.155,0,0,1,1.3,2.86,3.834,3.834,0,0,1,3.709,1.8V.673A.673.673,0,0,1,4.382,0h0a.673.673,0,0,1,.673.673V1.825A3.506,3.506,0,0,1,7.386,3.07a3.648,3.648,0,0,1,.751,1.659.884.884,0,0,1-.923,1.008h-.4a1.321,1.321,0,0,1-1.155-1,1.555,1.555,0,0,0-.279-.507,1.359,1.359,0,0,0-1.11-.5,1.409,1.409,0,0,0-1.068.4A1.474,1.474,0,0,0,2.818,5.2a1.423,1.423,0,0,0,.37,1.026,4.08,4.08,0,0,0,1.371.791,14.572,14.572,0,0,1,1.657.766,4.613,4.613,0,0,1,1.094.808,3.069,3.069,0,0,1,.681,1.026,3.5,3.5,0,0,1,.236,1.338,3.141,3.141,0,0,1-.892,2.322,3.911,3.911,0,0,1-2.456,1.052v1.005A.669.669,0,0,1,4.21,16h0a.669.669,0,0,1-.669-.669v-1a4.073,4.073,0,0,1-2.675-1.22,3.585,3.585,0,0,1-.851-1.76.883.883,0,0,1,.922-1.008h.4a1.351,1.351,0,0,1,1.168,1,1.712,1.712,0,0,0,.316.543,1.755,1.755,0,0,0,1.371.53,1.681,1.681,0,0,0,1.169-.387A1.372,1.372,0,0,0,5.8,10.969Z",
    transform: "translate(8 4)",
    fill: "#5c6a82",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  })));
};

var MoneyIconComponent = function MoneyIconComponent(props) {
  return /*#__PURE__*/React.createElement(Icon, _extends({
    component: function component() {
      return IconSvg(props.width, props.height);
    }
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 37
    }
  }));
};

MoneyIconComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  type: PropTypes.string
} : {};
MoneyIconComponent.defaultProps = {
  type: ''
};
export default MoneyIconComponent;