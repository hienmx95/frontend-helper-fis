import _regeneratorRuntime from "@babel/runtime/regenerator";

var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/openVote.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import React, { useState } from 'react';
import { Modal, Input } from 'antd';
import Button from './Button';
import Icon from './icons';

var range = function range(a, b) {
  return Array.from( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(x, y) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(x <= y)) {
              _context.next = 5;
              break;
            }

            _context.next = 3;
            return x++;

          case 3:
            _context.next = 0;
            break;

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })(a, b));
};

var ContentVote = function ContentVote(_ref) {
  var onSubmit = _ref.onSubmit,
      title = _ref.title,
      _ref$initialValue = _ref.initialValue,
      initialValue = _ref$initialValue === void 0 ? {} : _ref$initialValue;

  var _useState = useState(initialValue.score || 0),
      score = _useState[0],
      setScore = _useState[1];

  var _useState2 = useState(initialValue.content || ''),
      content = _useState2[0],
      setContent = _useState2[1];

  var _useState3 = useState(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var onClose = function onClose() {
    return Modal.destroyAll();
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(typeof onSubmit !== 'function')) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              setLoading(true);
              _context2.next = 5;
              return onSubmit({
                score: score,
                content: content
              });

            case 5:
              onClose();

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React.createElement("div", {
    className: "fwork-vote-box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vote-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "fwork-vote-close",
    onClick: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    size: 10,
    type: "close",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }))), /*#__PURE__*/React.createElement("span", {
    className: "vote-score",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, score, "/5"), /*#__PURE__*/React.createElement("div", {
    className: "vote-rating",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, range(1, 5).map(function (el) {
    return /*#__PURE__*/React.createElement("div", {
      key: el,
      onClick: function onClick() {
        return setScore(el);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      size: 32,
      type: el <= score ? 'star-rate-checked' : 'star-rate',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }));
  })), /*#__PURE__*/React.createElement(Input.TextArea, {
    rows: 3,
    value: content,
    className: "vote-content",
    placeholder: "Nh\u1EADp \xFD ki\u1EBFn c\u1EE7a b\u1EA1n",
    onChange: function onChange(_ref3) {
      var value = _ref3.target.value;
      return setContent(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), /*#__PURE__*/React.createElement("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "Hu\u1EF7 B\u1ECF"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: handleSubmit,
    disabled: score < 1 || score > 5,
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "\u0110\xE1nh gi\xE1")));
};

var openVote = function openVote(props) {
  return Modal.confirm({
    content: /*#__PURE__*/React.createElement(ContentVote, _extends({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 12
      }
    })),
    visible: true,
    className: 'fwork-modal-create-vote',
    cancelButtonProps: {
      style: {
        display: 'none'
      }
    },
    okButtonProps: {
      style: {
        display: 'none'
      }
    },
    icon: null,
    footer: null,
    okText: 'Đánh giá',
    cancelText: 'Huỷ bỏ'
  });
};

export default openVote;