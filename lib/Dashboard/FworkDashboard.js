"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Dashboard = _interopRequireDefault(require("./Dashboard"));

var _ListDashboard = _interopRequireDefault(require("./ListDashboard"));

var _CreateDashboard = _interopRequireDefault(require("./CreateDashboard"));

var _jsxFileName = "/Users/james/FWork/frontend-helper/src/Dashboard/FworkDashboard.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function FworkDashboard(props) {
  var _useState = (0, _react.useState)('dashboard'),
      dashboardLayout = _useState[0],
      setDashboardLayout = _useState[1];

  var _useState2 = (0, _react.useState)({}),
      dashboardCreate = _useState2[0],
      setDashboardCreate = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, dashboardLayout === 'dashboard' && /*#__PURE__*/_react["default"].createElement(_Dashboard["default"], {
    service: props.service,
    listGadgets: props.listGadgets,
    setDashboardLayout: setDashboardLayout,
    setDashboardCreate: setDashboardCreate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 43
    }
  }), dashboardLayout === 'list-dashboard' && /*#__PURE__*/_react["default"].createElement(_ListDashboard["default"], {
    service: props.service,
    setDashboardLayout: setDashboardLayout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 48
    }
  }), dashboardLayout === 'create-dashboard' && /*#__PURE__*/_react["default"].createElement(_CreateDashboard["default"], {
    service: props.service,
    setDashboardLayout: setDashboardLayout,
    dashboardCreate: dashboardCreate,
    setDashboardCreate: setDashboardCreate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 50
    }
  }));
}

var _default = FworkDashboard;
exports["default"] = _default;
module.exports = exports.default;