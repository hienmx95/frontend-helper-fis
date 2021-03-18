var _jsxFileName = "/Users/james/FWork/frontend-helper/src/Dashboard/FworkDashboard.js";
import React, { useState } from 'react';
import Dashboard from './Dashboard';
import ListDashboard from './ListDashboard';
import CreateDashboard from './CreateDashboard';

function FworkDashboard(props) {
  var _useState = useState('dashboard'),
      dashboardLayout = _useState[0],
      setDashboardLayout = _useState[1];

  var _useState2 = useState({}),
      dashboardCreate = _useState2[0],
      setDashboardCreate = _useState2[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, dashboardLayout === 'dashboard' && /*#__PURE__*/React.createElement(Dashboard, {
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
  }), dashboardLayout === 'list-dashboard' && /*#__PURE__*/React.createElement(ListDashboard, {
    service: props.service,
    setDashboardLayout: setDashboardLayout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 48
    }
  }), dashboardLayout === 'create-dashboard' && /*#__PURE__*/React.createElement(CreateDashboard, {
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

export default FworkDashboard;