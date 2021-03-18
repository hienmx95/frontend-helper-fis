var _jsxFileName = "/Users/james/FWork/frontend-helper/src/router/PrivateRoute.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import history from './history';
import { getToken } from '../localStorageCookies';

var PrivateRoute = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(PrivateRoute, _React$Component);

  var _super = _createSuper(PrivateRoute);

  function PrivateRoute(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    history.listen(function (location, action) {
      var token = getToken();

      if (!token && action === 'POP') {
        window.location.reload();
      }
    });
    return _this;
  }

  var _proto = PrivateRoute.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        Component = _this$props.component,
        authUser = _this$props.authUser,
        isPortal = _this$props.isPortal,
        rest = _objectWithoutPropertiesLoose(_this$props, ["component", "authUser", "isPortal"]);

    if (!authUser || authUser.loading) return null;

    if (!isPortal && !authUser.isLogged) {
      window.location.href = "/login?ref=" + window.location.href;
    }

    if (!authUser.companies || authUser.isLogged && authUser.companies.length < 1) {
      if (window.location.pathname !== '/register-company') {
        if (isPortal && this.props.history) {
          this.props.history.push('/register-company');
        } else {
          window.location.href = '/register-company';
        }
      }
    }

    if (authUser.isLogged && window.location.pathname === '/register-company') {
      var owner = authUser.companies.findIndex(function (item) {
        return item.company.represent === authUser._id;
      });

      if (owner >= 0) {
        // represent Company
        if (authUser.company) {
          window.location.href = '/app-menu';
        } else {
          if (isPortal && this.props.history) {
            this.props.history.push('/companies');
          } else {
            window.location.href = '/companies';
          }
        }
      }
    }

    if (window.location.pathname === '/app-menu' && !authUser.company) {
      window.location.href = '/companies';
    }

    if (authUser.company && !authUser.company.isPlan) {
      if (window.location.pathname !== '/choose-plan' && window.location.pathname !== '/payment') {
        window.location.href = '/choose-plan';
      }
    }

    if ((window.location.pathname === '/choose-plan' || window.location.pathname === '/choose-plan') && authUser.company.isPlan) {
      window.location.href = '/app-menu';
    }

    return /*#__PURE__*/React.createElement(Route, _extends({}, rest, {
      render: function render(props) {
        return authUser.isLogged ? /*#__PURE__*/React.createElement(Component, _extends({}, props, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 15
          }
        })) : /*#__PURE__*/React.createElement(Redirect, {
          to: {
            pathname: '/login',
            state: {
              from: props.location
            }
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 15
          }
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 7
      }
    }));
  };

  return PrivateRoute;
}(React.Component);

function mapStateToProps(state) {
  return {
    authUser: state.authUser
  };
}

export default connect(mapStateToProps, null)(PrivateRoute);