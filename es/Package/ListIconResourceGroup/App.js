var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/ListIconResourceGroup/App.jsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

var IconSvg = function IconSvg(width, height) {
  return /*#__PURE__*/React.createElement("svg", {
    id: "icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: width || 16,
    height: height || 16,
    viewBox: "0 0 16 16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    id: "Path",
    d: "M1.778,0A1.778,1.778,0,0,0,0,1.778V7.111A1.778,1.778,0,0,0,1.778,8.889H7.111A1.778,1.778,0,0,0,8.889,7.111V1.778A1.778,1.778,0,0,0,7.111,0Z",
    fill: "#5c6a82",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), /*#__PURE__*/React.createElement("path", {
    id: "Path-2",
    "data-name": "Path",
    d: "M1.778,0A1.778,1.778,0,0,0,0,1.778V4.444A1.778,1.778,0,0,0,1.778,6.222H4.444A1.778,1.778,0,0,0,6.222,4.444V1.778A1.778,1.778,0,0,0,4.444,0Z",
    transform: "translate(9.778 2.667)",
    fill: "#5c6a82",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), /*#__PURE__*/React.createElement("path", {
    id: "Path-3",
    "data-name": "Path",
    d: "M0,1.778A1.778,1.778,0,0,1,1.778,0H4.444A1.778,1.778,0,0,1,6.222,1.778V4.444A1.778,1.778,0,0,1,4.444,6.222H1.778A1.778,1.778,0,0,1,0,4.444Z",
    transform: "translate(9.778 9.778)",
    fill: "#5c6a82",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), /*#__PURE__*/React.createElement("path", {
    id: "Path-4",
    "data-name": "Path",
    d: "M1.778,0A1.778,1.778,0,0,0,0,1.778V4.444A1.778,1.778,0,0,0,1.778,6.222H4.444A1.778,1.778,0,0,0,6.222,4.444V1.778A1.778,1.778,0,0,0,4.444,0Z",
    transform: "translate(1.778 9.778)",
    fill: "#5c6a82",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }));
};

var AppIconComponent = function AppIconComponent(props) {
  return /*#__PURE__*/React.createElement(Icon, _extends({
    component: function component() {
      return IconSvg(props.width, props.height);
    }
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 35
    }
  }));
};

AppIconComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  type: PropTypes.string
} : {};
AppIconComponent.defaultProps = {
  type: ''
};
export default AppIconComponent;