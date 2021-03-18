import {
  FETCH_SETTING,
  FETCH_SETTING_SUCCESS,
  FETCH_SETTING_FAILURE
} from '../constants/actionTypes';

const initialState = {
  loading: false,
  settings: []
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SETTING:
      return {
        ...state,
        loading: true
      };
    case FETCH_SETTING_SUCCESS:
      return {
        loading: false,
        settings: action.payload
      };
    case FETCH_SETTING_FAILURE:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
};

export default settings;
