"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _icons = _interopRequireDefault(require("../icons"));

var _this = void 0,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/Steps/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fwork-steps",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, _react["default"].Children.map(children, function (child, i) {
    return _react["default"].cloneElement(child, {
      status: child.props.status || _getStatus(i)
    });
  }));
}; // eslint-disable-next-line react/display-name


Steps.Step = function (_ref2) {
  var title = _ref2.title,
      description = _ref2.description,
      status = _ref2.status;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fwork-step-item " + status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(_icons["default"], {
    type: status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "fwork-step-item-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 14
    }
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, title), _react["default"].isValidElement(description) ? description : /*#__PURE__*/_react["default"].createElement("p", {
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

var _default = Steps;
exports["default"] = _default;
module.exports = exports.default;