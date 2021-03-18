function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { FETCH_SETTING, FETCH_SETTING_SUCCESS, FETCH_SETTING_FAILURE } from '../constants/actionTypes';
var initialState = {
  loading: false,
  settings: []
};

var settings = function settings(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case FETCH_SETTING:
      return _extends({}, state, {
        loading: true
      });

    case FETCH_SETTING_SUCCESS:
      return {
        loading: false,
        settings: action.payload
      };

    case FETCH_SETTING_FAILURE:
      return _extends({}, state);

    default:
      return _extends({}, state);
  }
};

export default settings;