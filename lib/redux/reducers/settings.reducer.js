"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _actionTypes = require("../constants/actionTypes");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var initialState = {
  loading: false,
  settings: []
};

var settings = function settings(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case _actionTypes.FETCH_SETTING:
      return _extends({}, state, {
        loading: true
      });

    case _actionTypes.FETCH_SETTING_SUCCESS:
      return {
        loading: false,
        settings: action.payload
      };

    case _actionTypes.FETCH_SETTING_FAILURE:
      return _extends({}, state);

    default:
      return _extends({}, state);
  }
};

var _default = settings;
exports["default"] = _default;
module.exports = exports.default;