var _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/UserInfo/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import Popup from './Popup';
import { Avatar, Popover } from 'antd';
import { get } from 'lodash';

function UserInfo(_ref) {
  var _this = this;

  var _ref$users = _ref.users,
      users = _ref$users === void 0 ? [] : _ref$users,
      user = _ref.user,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 28 : _ref$size,
      placement = _ref.placement,
      _ref$hideName = _ref.hideName,
      hideName = _ref$hideName === void 0 ? false : _ref$hideName,
      rest = _objectWithoutPropertiesLoose(_ref, ["users", "user", "size", "placement", "hideName"]);

  var data = user ? [user] : users;
  var hideData = [];
  var showCount = 4;

  if (data && data.length > showCount) {
    hideData = data.slice(showCount);
    data = data.slice(0, showCount);
  }

  var propsPopup = {
    size: size,
    placement: placement,
    showName: !hideName && data.length === 1
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: "fwork-user-infor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }), data && data.map(function (user, i) {
    if (!user) return;
    return /*#__PURE__*/React.createElement(Popup, _extends({}, propsPopup, {
      styleAvatar: {
        zIndex: data.length - i,
        marginLeft: -8,
        fontSize: 0.6 * size,
        background: getColor(get(user, 'lastName[0]', 'Q'))
      },
      key: i,
      user: user,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 18
      }
    }));
  }), hideData.length > 0 && /*#__PURE__*/React.createElement(Popover, {
    overlayClassName: "fwork-list-user-popup",
    placement: placement,
    content: /*#__PURE__*/React.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }, hideData.map(function (user) {
      return /*#__PURE__*/React.createElement("div", {
        key: user == null ? void 0 : user._id,
        className: "fwork-list-user-popup-item",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 19
        }
      }, /*#__PURE__*/React.createElement(Popup, _extends({}, propsPopup, {
        placement: "leftTop",
        showName: true,
        styleAvatar: {
          background: getColor(get(user, 'lastName[0]', 'Q'))
        },
        key: user == null ? void 0 : user._id,
        user: user,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }
      })));
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    style: {
      zIndex: 0,
      marginLeft: -8,
      fontSize: size / 2,
      color: '#172b4d',
      background: getColor()
    },
    src: user == null ? void 0 : user.avatar,
    size: size,
    className: "rest_user",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, hideData.length <= 9 ? '+' + hideData.length : '9+'))));
}

export default UserInfo;

var getColor = function getColor(_char) {
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