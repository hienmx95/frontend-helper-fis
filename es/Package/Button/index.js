var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/Button/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
var currentService = window.location.pathname.split('/')[1];

var ButtonComponent = function ButtonComponent(props) {
  var children = props.children,
      _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      rest = _objectWithoutPropertiesLoose(props, ["children", "type"]);

  return /*#__PURE__*/React.createElement(Button, _extends({}, rest, {
    className: "fwork-btn fwork-btn-" + type + " " + currentService,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), children);
};

ButtonComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  type: PropTypes.string
} : {};
export default ButtonComponent;