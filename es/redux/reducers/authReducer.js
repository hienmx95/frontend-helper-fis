function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { SET_CURRENT_USER, CLEAR_CURRENT_USER, LOADING_USER_INFO, CHANGE_PROFILE_USER, CHANGE_SETTING_USER } from '../constants/actionTypes';
var initialState = {
  loading: true,
  isLogged: false
};
export default function (state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case SET_CURRENT_USER:
      return _extends({
        loading: false,
        isLogged: true
      }, action.payload);

    case CLEAR_CURRENT_USER:
      return {
        loading: false,
        isLogged: false
      };

    case CHANGE_PROFILE_USER:
      {
        var newState = state;
        newState.profile = action.payload;
        return _extends({
          loading: false,
          isLogged: true
        }, newState);
      }

    case CHANGE_SETTING_USER:
      {
        var _newState = state;
        _newState.setting = action.payload;
        return _extends({
          loading: false,
          isLogged: true
        }, _newState);
      }

    case LOADING_USER_INFO:
      return {
        loading: true,
        isLogged: false
      };

    default:
      return state;
  }
}