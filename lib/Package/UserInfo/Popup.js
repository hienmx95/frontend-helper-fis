"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _Button = _interopRequireDefault(require("../Button"));

var _fetchAPI = _interopRequireDefault(require("../../fetchAPI"));

var _Icon = require("./Icon");

var _this = void 0,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/UserInfo/Popup.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

  var _useState = (0, _react.useState)(organizationInfo == null ? void 0 : organizationInfo.name),
      orgName = _useState[0],
      setOrgName = _useState[1];

  (0, _react.useEffect)(function () {
    if (!(organizationInfo == null ? void 0 : organizationInfo.name)) {
      var FWORK_API_ENDPOINT = process.env.FWORK_API_ENDPOINT || process.env.REACT_APP_FWORK_API_ENDPOINT;
      var endpoint = FWORK_API_ENDPOINT + '/iam';
      (0, _fetchAPI["default"])(endpoint + ("/organizations/" + organization + "/plain-info"), 'GET').then(function (_ref2) {
        var _res$data;

        var res = _ref2.data;

        if (!res.success && !res.data) {
          return;
        }

        setOrgName((_res$data = res.data) == null ? void 0 : _res$data.name);
      });
    }
  }, [organizationInfo == null ? void 0 : organizationInfo.name]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "avatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(_antd.Avatar, {
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
  }, lastName[0])), /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, fullName), /*#__PURE__*/_react["default"].createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon.DepartmentIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), /*#__PURE__*/_react["default"].createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, orgName)), /*#__PURE__*/_react["default"].createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon.AtSignIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }), /*#__PURE__*/_react["default"].createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, username)), phone && /*#__PURE__*/_react["default"].createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon.PhoneIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), /*#__PURE__*/_react["default"].createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, phone)), /*#__PURE__*/_react["default"].createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon.EmailIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }), /*#__PURE__*/_react["default"].createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, email)))), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    type: "secondary",
    block: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon.ChatIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react["default"].createElement("span", {
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
  return /*#__PURE__*/_react["default"].createElement(_antd.Popover, {
    content: /*#__PURE__*/_react["default"].createElement(ContentPopover, {
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
  }, /*#__PURE__*/_react["default"].createElement(_antd.Avatar, {
    style: styleAvatar,
    size: size,
    src: user == null ? void 0 : user.avatar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, user == null ? void 0 : user.lastName[0]), showName ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "fullname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  }, user == null ? void 0 : user.fullName) : '');
};

var _default = Popup;
exports["default"] = _default;
module.exports = exports.default;