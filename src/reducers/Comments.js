import { assign } from 'lodash';

import * as types from 'constants/actionTypes/CommentsActionTypes';

const initialState = {
  isFetching: false,
  entries: [],
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.COMMENTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.COMMENTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.COMMENTS_SUCCESS:
      return assign({}, initialState, { entries: action.response });
    default:
      return state;
  }
}
