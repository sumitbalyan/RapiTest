import {weatherConstant} from '../constants';

const initialstate = {
  loading: false,
  items: null,
  error: null,
};

export const weather = (state = initialstate, action) => {
  const {
    WEATTHER_REQUEST,
    WEATTHER_SUCCESS,
    WEATTHER_FAILURE,
  } = weatherConstant;
  switch (action.type) {
    case WEATTHER_REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
      };
    case WEATTHER_SUCCESS:
      return {
        ...state,
        items: action.data,
        loading: false,
      };
    case WEATTHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
