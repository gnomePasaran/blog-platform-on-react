import * as types from 'constants/actionTypes/CommentsActionTypes';

import { API_CALL } from 'middleware/API';

export function fetchComments(id) {
  return {
    [API_CALL]: {
      endpoint: `/post/${id}/comments`,
      method: 'GET',
      query: {},
      types: [
        types.COMMENTS_REQUEST,
        types.COMMENTS_SUCCESS,
        types.COMMENTS_ERROR
      ]
    }
  };
}
