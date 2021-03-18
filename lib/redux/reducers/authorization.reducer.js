"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _actionTypes = require("../constants/actionTypes");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var initialState = {
  isLoading: true,
  dataLimitView: [],
  dataLimitManagement: [],
  permissions: []
};

var authorization = function authorization(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case _actionTypes.FETCH_PERMISSIONS_SUCCESS:
      {
        var payload = action.payload;
        return _extends({}, state, {
          dataLimitView: payload.dataLimitView,
          dataLimitManagement: payload.dataLimitManagement,
          permissions: payload.permissions,
          isLoading: false
        });
      }

    default:
      return state;
  }
};

var _default = authorization;
exports["default"] = _default;
module.exports = exports.default;