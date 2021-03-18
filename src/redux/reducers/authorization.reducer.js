import {
  FETCH_PERMISSIONS_SUCCESS
} from '../constants/actionTypes';

const initialState = {
  isLoading: true,
  dataLimitView: [],
  dataLimitManagement: [],
  permissions: []
};

const authorization = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PERMISSIONS_SUCCESS: {
      const payload = action.payload;
      return {
        ...state,
        dataLimitView: payload.dataLimitView,
        dataLimitManagement: payload.dataLimitManagement,
        permissions: payload.permissions,
        isLoading: false
      };
    }
    default:
      return state;
  }
};

export default authorization;
