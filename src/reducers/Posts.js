import { assign, cloneDeep } from 'lodash';

import * as types from 'constants/actionTypes/PostsActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

const updatedItems = (entries, response) => {
  if (entries.length < 1) return entries;

  const { id, meta } = response;
  const newEntries = cloneDeep(entries);

  newEntries.items
    .find(item => item.id === id)
    .meta = meta;

  return newEntries;
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, initialState, { entries: action.response });
    case 'CREATE_POST_LIKE_SUCCESS':
      return assign({}, initialState, { entries: updatedItems(state.entries, action.response) });
    default:
      return state;
  }
}
