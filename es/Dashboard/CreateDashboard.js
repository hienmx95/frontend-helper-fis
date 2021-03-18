import _regeneratorRuntime from "@babel/runtime/regenerator";
var _jsxFileName = "/Users/james/FWork/frontend-helper/src/Dashboard/CreateDashboard.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import React, { useEffect } from 'react';
import { common, fetchAPI } from '@fwork/frontend-helper';
import { Form } from 'antd';
var FWORK_API_ENDPOINT = process.env.FWORK_API_ENDPOINT || process.env.REACT_APP_FWORK_API_ENDPOINT;
var baseUrlDashboard = FWORK_API_ENDPOINT + '/dashboard';
var HeaderPage = common.HeaderPage,
    Icon = common.Icon,
    ContainerForm = common.ContainerForm,
    TextInput = common.TextInput,
    Button = common.Button;

function createDashboard(props) {
  var service = props.service,
      setDashboardLayout = props.setDashboardLayout,
      form = props.form,
      dashboardCreate = props.dashboardCreate,
      setDashboardCreate = props.setDashboardCreate;
  var getFieldDecorator = form.getFieldDecorator;
  useEffect(function () {
    return function () {
      setDashboardCreate({});
    };
  }, []);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(err, values) {
        var components, status, _yield$fetchAPI, resp;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (err) {
                  _context.next = 7;
                  break;
                }

                components = dashboardCreate.components, status = dashboardCreate.status;
                _context.next = 4;
                return fetchAPI({
                  url: baseUrlDashboard,
                  method: 'post',
                  body: _extends({}, values, {
                    service: service,
                    components: components,
                    status: status
                  })
                });

              case 4:
                _yield$fetchAPI = _context.sent;
                resp = _yield$fetchAPI.data;

                if (resp.success) {
                  setDashboardLayout('list-dashboard');
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  };

  return /*#__PURE__*/React.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement(HeaderPage, {
    title: "T\u1EA1o m\u1EDBi Layout",
    addon: /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        return setDashboardLayout("dashboard");
      },
      className: "btn-icon-close",
      type: "secondary",
      style: {
        order: 1
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      size: 12,
      type: "close",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), /*#__PURE__*/React.createElement(ContainerForm, {
    style: {
      overflowX: "auto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement(Form, {
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    getFieldDecorator: getFieldDecorator,
    name: "name",
    label: "T\xEAn Layout",
    rules: [{
      required: true,
      message: "Tên không được để trống",
      whitespace: true
    }, {
      max: 256,
      message: "Tên nhóm có độ dài nhỏ hơn 256 kí tự"
    }],
    placeholder: "Nh\u1EADp t\xEAn Layout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), /*#__PURE__*/React.createElement(TextInput, {
    getFieldDecorator: getFieldDecorator,
    name: "description",
    label: "M\xF4 t\u1EA3",
    placeholder: "Nh\u1EADp m\xF4 t\u1EA3 ng\u1EAFn Layout",
    rules: [{
      max: 256,
      message: "Bạn nhập quá 256 kí tự"
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "link",
    onClick: function onClick() {
      return setDashboardLayout('dashboard');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "H\u1EE7y b\u1ECF"), /*#__PURE__*/React.createElement(Button, {
    htmlType: "submit",
    style: {
      marginLeft: "8px"
    },
    type: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, "T\u1EA1o m\u1EDBi")))));
}

export default React.memo(Form.create({
  name: 'form_create_dashboard'
})(createDashboard));