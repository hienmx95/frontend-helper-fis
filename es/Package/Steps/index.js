var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/Steps/index.js";

import React from 'react';
import Icon from '../icons';

var Steps = function Steps(_ref) {
  var children = _ref.children,
      _ref$current = _ref.current,
      current = _ref$current === void 0 ? 1 : _ref$current,
      _ref$reject = _ref.reject,
      reject = _ref$reject === void 0 ? false : _ref$reject;

  var _getStatus = function _getStatus(index) {
    index = index + 1;

    if (current < index) {
      return 'wait';
    } else if (current > index || current === children.length) {
      return 'success';
    } else {
      if (reject) {
        return 'error';
      }

      return 'processing';
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "fwork-steps",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, React.Children.map(children, function (child, i) {
    return React.cloneElement(child, {
      status: child.props.status || _getStatus(i)
    });
  }));
}; // eslint-disable-next-line react/display-name


Steps.Step = function (_ref2) {
  var title = _ref2.title,
      description = _ref2.description,
      status = _ref2.status;
  return /*#__PURE__*/React.createElement("div", {
    className: "fwork-step-item " + status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    type: status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "fwork-step-item-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 14
    }
  }, /*#__PURE__*/React.createElement("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, title), React.isValidElement(description) ? description : /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: description
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  })));
};

export default Steps;