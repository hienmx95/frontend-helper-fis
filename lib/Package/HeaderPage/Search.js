"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _icon_search = require("../icons/icon_search.svg");

var _lodash = require("lodash");

var _this = void 0,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/HeaderPage/Search.js";

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Search = function Search(_ref) {
  var onSearch = _ref.onSearch;

  var _useState = (0, _react.useState)(true),
      hide = _useState[0],
      setHide = _useState[1];

  if (!onSearch) {
    return '';
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fwork-header-page-search",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    placeholder: placeholder || 'Tìm kiếm',
    onChange: function onChange(e) {
      var searchValue = e.target.value.trim();
      (0, _lodash.debounce)(handleSearch(searchValue), 300);
    },
    className: "fwork-search-bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react["default"].createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(_icon_search.ReactComponent, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  })));
};

var _default = Search;
exports["default"] = _default;
module.exports = exports.default;