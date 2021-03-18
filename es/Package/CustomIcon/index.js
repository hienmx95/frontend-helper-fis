var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/CustomIcon/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

var CustomIconComponent = function CustomIconComponent(props) {
  var to = props.to,
      componentIcon = props.componentIcon;

  var CustomIcon = function CustomIcon(props) {
    return /*#__PURE__*/React.createElement(Icon, _extends({
      component: componentIcon
    }, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 31
      }
    }));
  };

  if (to) {
    return /*#__PURE__*/React.createElement(Link, {
      to: props.to,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }
    }, /*#__PURE__*/React.createElement(Button, _extends({
      className: "fwork-btn-icon"
    }, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }), /*#__PURE__*/React.createElement(CustomIcon, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    })));
  }

  return /*#__PURE__*/React.createElement(Button, _extends({
    className: "fwork-btn-icon"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }), /*#__PURE__*/React.createElement(CustomIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }));
};

CustomIconComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  to: PropTypes.string
} : {};
CustomIconComponent.defaultProps = {
  to: null
};
export default CustomIconComponent;