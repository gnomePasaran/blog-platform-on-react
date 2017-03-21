import * as types from 'constants/actionTypes/SearchActionTypes';
import { assign } from 'lodash';

const initialState = {
  isLoading: false,
  results: [],
  value: '',
};

export default function (state = initialState, action) {
  const { type, response } = action;

  switch (type) {
    case types.CHANGE_SEARCH_STING:
      return assign({}, initialState, { value: response });
    case types.SEARCH_REQUEST:
      return assign({}, initialState, { isLoading: true });
    case types.SEARCH_SUCCESS:
      return assign({}, initialState, { results: response });
    case types.SEARCH_ERROR:
      return assign({}, initialState);
    default:
      return state;
  }
}
