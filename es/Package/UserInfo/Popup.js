var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/UserInfo/Popup.js";

import React, { useEffect, useState } from 'react';
import { Avatar, Popover } from 'antd';
import Button from '../Button';
import fetchAPI from '../../fetchAPI';
import { AtSignIcon, PhoneIcon, DepartmentIcon, EmailIcon, ChatIcon } from './Icon';

var ContentPopover = function ContentPopover(_ref) {
  var user = _ref.user,
      bg = _ref.bg;
  var fullName = user.fullName,
      _user$username = user.username,
      username = _user$username === void 0 ? false : _user$username,
      avatar = user.avatar,
      _user$email = user.email,
      email = _user$email === void 0 ? false : _user$email,
      _user$phone = user.phone,
      phone = _user$phone === void 0 ? false : _user$phone,
      _user$lastName = user.lastName,
      lastName = _user$lastName === void 0 ? 'B' : _user$lastName,
      organizationInfo = user.organizationInfo,
      organization = user.organization;

  var _useState = useState(organizationInfo == null ? void 0 : organizationInfo.name),
      orgName = _useState[0],
      setOrgName = _useState[1];

  useEffect(function () {
    if (!(organizationInfo == null ? void 0 : organizationInfo.name)) {
      var FWORK_API_ENDPOINT = process.env.FWORK_API_ENDPOINT || process.env.REACT_APP_FWORK_API_ENDPOINT;
      var endpoint = FWORK_API_ENDPOINT + '/iam';
      fetchAPI(endpoint + ("/organizations/" + organization + "/plain-info"), 'GET').then(function (_ref2) {
        var _res$data;

        var res = _ref2.data;

        if (!res.success && !res.data) {
          return;
        }

        setOrgName((_res$data = res.data) == null ? void 0 : _res$data.name);
      });
    }
  }, [organizationInfo == null ? void 0 : organizationInfo.name]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    style: {
      background: bg
    },
    src: avatar,
    size: 96,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, lastName[0])), /*#__PURE__*/React.createElement("div", {
    className: "user-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, fullName), /*#__PURE__*/React.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement(DepartmentIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), /*#__PURE__*/React.createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, orgName)), /*#__PURE__*/React.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement(AtSignIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }), /*#__PURE__*/React.createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, username)), phone && /*#__PURE__*/React.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, /*#__PURE__*/React.createElement(PhoneIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), /*#__PURE__*/React.createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, phone)), /*#__PURE__*/React.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement(EmailIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }), /*#__PURE__*/React.createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, email)))), /*#__PURE__*/React.createElement(Button, {
    type: "secondary",
    block: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement(ChatIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }), /*#__PURE__*/React.createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, "Nh\u1EAFn tin")));
};

var Popup = function Popup(_ref3) {
  var _ref3$user = _ref3.user,
      user = _ref3$user === void 0 ? {} : _ref3$user,
      _ref3$styleAvatar = _ref3.styleAvatar,
      styleAvatar = _ref3$styleAvatar === void 0 ? {} : _ref3$styleAvatar,
      size = _ref3.size,
      placement = _ref3.placement,
      _ref3$showName = _ref3.showName,
      showName = _ref3$showName === void 0 ? false : _ref3$showName;
  return /*#__PURE__*/React.createElement(Popover, {
    content: /*#__PURE__*/React.createElement(ContentPopover, {
      user: user,
      bg: styleAvatar.background,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 16
      }
    }),
    style: styleAvatar,
    placement: placement,
    overlayClassName: "fw-overlay-user",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    style: styleAvatar,
    size: size,
    src: user == null ? void 0 : user.avatar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, user == null ? void 0 : user.lastName[0]), showName ? /*#__PURE__*/React.createElement("span", {
    className: "fullname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  }, user == null ? void 0 : user.fullName) : '');
};

export default Popup;