import { assign, cloneDeep } from 'lodash';

import * as types from 'constants/actionTypes/CommentsActionTypes';

const initialState = {
  isFetching: false,
  entries: [],
  error: false
};

const updateComments = (entries, comment) => {
  if (entries.length < 1) return entries;

  const newEntries = cloneDeep(entries);
  newEntries.push(comment);
  return newEntries;
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.COMMENTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.COMMENTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.COMMENTS_SUCCESS:
      return assign({}, initialState, { entries: action.response });

    case types.CREATE_COMMENT_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.CREATE_COMMENT_ERROR:
      return assign({}, state, { error: true });
    case types.CREATE_COMMENT_SUCCESS:
      return assign({}, initialState, { entries: updateComments(state.entries, action.response) });
    default:
      return state;
  }
}
