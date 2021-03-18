var _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/HeaderPage/index.js";
import React from 'react';
import Icon from '../icons';
import { useHistory } from 'react-router-dom';
import { Input, Button } from 'antd';
import PropTypes from 'prop-types';
import { isString, isFunction } from 'lodash';
var Search = Input.Search;
import FwButton from '../Button';

function HeaderPage(props) {
  var _this = this;

  var history = useHistory();
  var title = props.title,
      placeholder = props.placeholder,
      titleButton = props.titleButton,
      onClick = props.onClick,
      actionCancel = props.actionCancel,
      actionEdit = props.actionEdit,
      actionTransfer = props.actionTransfer,
      actionDelete = props.actionDelete,
      onSearch = props.onSearch,
      initSearchValue = props.initSearchValue,
      hideShadow = props.hideShadow,
      addon = props.addon;

  var _renderButtonAction = function _renderButtonAction(action, icon) {
    var onAction;

    if (isString(action)) {
      onAction = function onAction() {
        return history.push(action);
      };
    } else if (isFunction(action)) {
      onAction = action;
    } else {
      return '';
    }

    return /*#__PURE__*/React.createElement(Button, {
      className: "fwork-btn-icon",
      onClick: onAction,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      type: icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }
    }));
  };

  var _renderSearch = function _renderSearch() {
    if (!isFunction(onSearch)) {
      return '';
    }

    return /*#__PURE__*/React.createElement(Search, {
      placeholder: placeholder || 'Tìm kiếm',
      onChange: function onChange(e) {
        var searchValue = e.target.value.trim();
        handleSearch(searchValue);
      },
      defaultValue: initSearchValue || '',
      className: "fwork-search-bar",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 12
      }
    });
  };

  var handleSearch = debounce(function (searchValue) {
    onSearch(searchValue);
  }, 300);
  return /*#__PURE__*/React.createElement("div", {
    className: "fwork-header-page " + (hideShadow ? 'hide-box-shadow' : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "fwork-header-page-actions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, addon, _renderSearch(), titleButton ? /*#__PURE__*/React.createElement(FwButton, {
    type: "primary",
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, titleButton) : '', _renderButtonAction(actionEdit, 'edit'), _renderButtonAction(actionTransfer, 'move'), _renderButtonAction(actionDelete, 'delete'), _renderButtonAction(actionCancel, 'close')));
}

function debounce(a, b, c) {
  var d, e;
  return function () {
    function h() {
      d = null;
      c || (e = a.apply(f, g));
    }

    var f = this;
    var g = arguments;
    return clearTimeout(d), d = setTimeout(h, b), c && !d && (e = a.apply(f, g)), e;
  };
}

HeaderPage.propTypes = process.env.NODE_ENV !== "production" ? {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  titleButton: PropTypes.string,
  onClick: PropTypes.func,
  onSearch: PropTypes.func
} : {};
export default HeaderPage;