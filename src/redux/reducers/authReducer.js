import {SET_CURRENT_USER, CLEAR_CURRENT_USER, LOADING_USER_INFO, CHANGE_PROFILE_USER, CHANGE_SETTING_USER} from '../constants/actionTypes';

const initialState = {
  loading: true,
  isLogged: false
};

export default function (state = initialState, action) {
  switch (action.type) {
  case SET_CURRENT_USER:
    return {
      loading: false,
      isLogged: true,
      ...action.payload
    };
  case CLEAR_CURRENT_USER:
    return {
      loading: false,
      isLogged: false
    };
  case CHANGE_PROFILE_USER:
  {
    let newState = state;
    newState.profile = action.payload;
    return {
      loading: false,
      isLogged: true,
      ...newState
    };
  }
  case CHANGE_SETTING_USER:
  {
    let newState = state;
    newState.setting = action.payload;
    return {
      loading: false,
      isLogged: true,
      ...newState
    };
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
