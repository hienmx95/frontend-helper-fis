"use strict";

exports.__esModule = true;
exports["default"] = _default;

var _actionTypes = require("../constants/actionTypes");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var initialState = {
  loading: true,
  isLogged: false
};

function _default(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case _actionTypes.SET_CURRENT_USER:
      return _extends({
        loading: false,
        isLogged: true
      }, action.payload);

    case _actionTypes.CLEAR_CURRENT_USER:
      return {
        loading: false,
        isLogged: false
      };

    case _actionTypes.CHANGE_PROFILE_USER:
      {
        var newState = state;
        newState.profile = action.payload;
        return _extends({
          loading: false,
          isLogged: true
        }, newState);
      }

    case _actionTypes.CHANGE_SETTING_USER:
      {
        var _newState = state;
        _newState.setting = action.payload;
        return _extends({
          loading: false,
          isLogged: true
        }, _newState);
      }

    case _actionTypes.LOADING_USER_INFO:
      return {
        loading: true,
        isLogged: false
      };

    default:
      return state;
  }
}

module.exports = exports.default;