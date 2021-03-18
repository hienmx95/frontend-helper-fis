var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/HeaderPage/Search.js";

import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from '../icons/icon_search.svg';
import { debounce } from 'lodash';

var Search = function Search(_ref) {
  var onSearch = _ref.onSearch;

  var _useState = useState(true),
      hide = _useState[0],
      setHide = _useState[1];

  if (!onSearch) {
    return '';
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "fwork-header-page-search",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: placeholder || 'Tìm kiếm',
    onChange: function onChange(e) {
      var searchValue = e.target.value.trim();
      debounce(handleSearch(searchValue), 300);
    },
    className: "fwork-search-bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), /*#__PURE__*/React.createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement(SearchIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  })));
};

export default Search;