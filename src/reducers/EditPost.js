import { assign } from 'lodash';

import * as types from 'constants/actionTypes/EditPostActionTypes';

const initialState = {
  isSending: false,
  isSuccess: false,
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_POST_REQUEST:
      return assign({}, initialState, { isSending: true });
    case types.UPDATE_POST_ERROR:
      return assign({}, initialState, { error: true });
    case types.UPDATE_POST_SUCCESS:
      return assign({}, initialState, { isSuccess: true });
    default:
      return state;
  }
}
