"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _fetchAPI = _interopRequireDefault(require("../../fetchAPI"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

var _lodash = require("lodash");

var _this = void 0,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/SelectUser/index.js";

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Option = _antd.Select.Option;

function usePrevious(value) {
  var ref = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    ref.current = value;
  }, [value]);
  return ref.current || {};
}

var isArray = function isArray(variable) {
  return !!variable && variable.constructor === Array;
};

var map = function map(variable) {
  return variable.map(function (el) {
    return el._id ? el._id : el;
  });
};

function isDifferent(preData, nextData) {
  if (!nextData || isArray(nextData) && !nextData.length) return false;

  if (preData !== nextData) {
    if (isArray(preData) && isArray(nextData)) {
      return (0, _lodash.xor)(map(preData), map(nextData)).length > 0;
    }

    return true;
  }

  return false;
}

var SelectUser = function SelectUser(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name,
      getFieldDecorator = _ref.getFieldDecorator,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$rules = _ref.rules,
      rules = _ref$rules === void 0 ? [] : _ref$rules,
      _ref$extendData = _ref.extendData,
      extendData = _ref$extendData === void 0 ? [] : _ref$extendData,
      widthPercent = _ref.widthPercent,
      _ref$initialValue = _ref.initialValue,
      initialValue = _ref$initialValue === void 0 ? [] : _ref$initialValue,
      onChange = _ref.onChange,
      _ref$showEmail = _ref.showEmail,
      showEmail = _ref$showEmail === void 0 ? false : _ref$showEmail,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      rest = _objectWithoutPropertiesLoose(_ref, ["name", "getFieldDecorator", "label", "rules", "extendData", "widthPercent", "initialValue", "onChange", "showEmail", "options"]);

  var prev = usePrevious({
    extendData: extendData,
    initialValue: initialValue,
    options: options
  });

  var _useState = (0, _react.useState)([]),
      users = _useState[0],
      setUsers = _useState[1];

  (0, _react.useEffect)(function () {
    if (!initialValue || !initialValue.length) {
      return;
    }

    if (isDifferent(prev.extendData, extendData) || isDifferent(prev.initialValue, initialValue)) {
      fetchInitialValue();
    }
  }, [extendData, initialValue, options]);
  (0, _react.useEffect)(function () {
    if (isDifferent(prev.extendData, extendData) || isDifferent(prev.options, options)) {
      var data = extendData || [];

      if (options && options.length > 0) {
        data = data.concat(options.map(function (el) {
          return _extends({}, el, {
            name: el.fullName
          });
        }));
      }

      setUsers(data);
    }
  }, [extendData, options]);
  (0, _react.useEffect)(function () {
    return function () {
      return setUsers([]);
    };
  }, []);

  var fetchInitialValue = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var FWORK_API_ENDPOINT, USER_BACKEND, initialValue2, userIds, data, _yield$fetchAPI, result;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              FWORK_API_ENDPOINT = process.env.FWORK_API_ENDPOINT || process.env.REACT_APP_FWORK_API_ENDPOINT;
              USER_BACKEND = FWORK_API_ENDPOINT + '/users';
              initialValue2 = Array.isArray(initialValue) ? initialValue : [initialValue];
              userIds = initialValue2.filter(function (el) {
                return !el.includes('_');
              });
              data = extendData || [];

              if (options && options.length > 0) {
                data = data.concat(options.map(function (el) {
                  return _extends({}, el, {
                    name: el.fullName,
                    isUser: true
                  });
                }));
              }

              if (!userIds.length) {
                _context.next = 17;
                break;
              }

              if (!(options && options.length > 0)) {
                _context.next = 10;
                break;
              }

              _context.next = 17;
              break;

            case 10:
              _context.next = 12;
              return (0, _fetchAPI["default"])(USER_BACKEND + "/info", 'GET', null, {
                userIds: userIds
              });

            case 12:
              _yield$fetchAPI = _context.sent;
              result = _yield$fetchAPI.data;

              if (!(!result || !result.data || !result.success)) {
                _context.next = 16;
                break;
              }

              return _context.abrupt("return");

            case 16:
              data = data.concat(result.data.map(function (el) {
                return _extends({}, el, {
                  name: el.fullName,
                  isUser: true
                });
              }));

            case 17:
              setUsers(data);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchInitialValue() {
      return _ref2.apply(this, arguments);
    };
  }();

  var fetchUsers = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2(key) {
      var FWORK_API_ENDPOINT, USER_BACKEND, url, data, _yield$fetchAPI2, result;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              FWORK_API_ENDPOINT = process.env.FWORK_API_ENDPOINT || process.env.REACT_APP_FWORK_API_ENDPOINT;
              USER_BACKEND = FWORK_API_ENDPOINT + '/users';
              url = USER_BACKEND + "/search";
              data = {
                url: url,
                method: 'GET',
                params: {
                  key: key
                }
              };
              _context2.next = 6;
              return (0, _fetchAPI["default"])(data);

            case 6:
              _yield$fetchAPI2 = _context2.sent;
              result = _yield$fetchAPI2.data;

              if (!(!result || !result.data || !result.success)) {
                _context2.next = 11;
                break;
              }

              console.error('[Select User] Some thing wrong when get users!');
              return _context2.abrupt("return", []);

            case 11:
              return _context2.abrupt("return", result.data.map(function (el) {
                return _extends({}, el, {
                  name: el.fullName,
                  isUser: true
                });
              }));

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function fetchUsers(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var fetchData = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee3(key) {
      var optionDataFiltered, extendDataFiltered, _users, _extendDataFiltered;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (key === void 0) {
                key = '';
              }

              key = key.trim();

              if (!(options && options.length > 0)) {
                _context3.next = 9;
                break;
              }

              options = options.map(function (el) {
                return _extends({}, el, {
                  name: el.fullName,
                  isUser: true
                });
              });
              optionDataFiltered = options.filter(function (el) {
                return el.name.toLowerCase().includes(key.toLowerCase());
              });
              extendDataFiltered = extendData.filter(function (el) {
                return el.name.toLowerCase().includes(key.toLowerCase());
              });
              setUsers(optionDataFiltered.concat(extendDataFiltered));
              _context3.next = 14;
              break;

            case 9:
              _context3.next = 11;
              return fetchUsers(key);

            case 11:
              _users = _context3.sent;
              _extendDataFiltered = extendData.filter(function (el) {
                return el.name.toLowerCase().includes(key.toLowerCase());
              });
              setUsers(_users.concat(_extendDataFiltered));

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function fetchData(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  if (typeof getFieldDecorator !== 'function' || !getFieldDecorator) {
    getFieldDecorator = function getFieldDecorator() {
      return function (el) {
        return el;
      };
    };

    rest.defaultValue = initialValue;
  }

  return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, {
    label: label,
    className: "fwork-form-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 5
    }
  }, getFieldDecorator(name, {
    rules: rules,
    initialValue: initialValue
  })( /*#__PURE__*/_react["default"].createElement(_antd.Select, _extends({
    className: "fwork-select-user",
    dropdownClassName: "fwork-dropdown-select-users",
    onSearch: (0, _lodash.debounce)(fetchData, 300),
    style: {
      width: widthPercent + "%"
    },
    notFoundContent: null,
    onChange: onChange,
    filterOption: false,
    showSearch: true,
    onFocus: function onFocus() {
      return fetchData();
    }
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }), users.map(function (user) {
    var userId = user._id,
        name = user.name,
        avatar = user.avatar,
        _user$username = user.username,
        username = _user$username === void 0 ? '' : _user$username,
        _user$email = user.email,
        email = _user$email === void 0 ? '' : _user$email,
        _user$lastName = user.lastName,
        lastName = _user$lastName === void 0 ? '' : _user$lastName,
        status = user.status,
        isUser = user.isUser;
    return /*#__PURE__*/_react["default"].createElement(Option, {
      key: userId,
      value: userId,
      disabled: status === 'disabled',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 15
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "fwork-option-select-user",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }
    }, isUser && /*#__PURE__*/_react["default"].createElement("div", {
      className: "fwork-option-avatar",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 21
      }
    }, /*#__PURE__*/_react["default"].createElement(_antd.Avatar, {
      size: 32,
      src: avatar,
      style: {
        backgroundColor: getColor(lastName[0])
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 23
      }
    }, name ? name[0] : '')), /*#__PURE__*/_react["default"].createElement("div", {
      className: "fwork-option-user-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 19
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "info-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 21
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 23
      }
    }, name), status === 'disabled' && /*#__PURE__*/_react["default"].createElement("span", {
      className: "user-inactive",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 25
      }
    }, "inactive")), showEmail ? /*#__PURE__*/_react["default"].createElement("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 23
      }
    }, email) : !!username && /*#__PURE__*/_react["default"].createElement("span", {
      className: "info-username",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 25
      }
    }, "@", username))));
  }))));
};

var getColor = function getColor(_char) {
  if (_char === void 0) {
    _char = 'O';
  }

  if (typeof _char !== 'string') {
    return '#e7e9ed';
  }

  _char = _char.toUpperCase();
  var colors = ['#ffa726', '#ef5350', '#ec407a', '#fdd835', '#66bb6a', '#26a69a', '#00bcd4', '#42a5f5', '#5c6bc0'];
  var n = _char.charCodeAt(0) - 65;
  var index = n % colors.length;

  if (index < 0 || index >= colors.length) {
    return '#e7e9ed';
  }

  return colors[index];
};

SelectUser.propTypes = process.env.NODE_ENV !== "production" ? {
  rules: _propTypes["default"].array,
  handleChange: _propTypes["default"].func,
  type: _propTypes["default"].string,
  widthPercent: _propTypes["default"].number,
  initialValue: _propTypes["default"].any,
  extendData: _propTypes["default"].array
} : {};
SelectUser.defaultProps = {
  type: 'text',
  widthPercent: 100,
  name: '',
  initialValue: undefined
};
var _default = SelectUser;
exports["default"] = _default;
module.exports = exports.default;