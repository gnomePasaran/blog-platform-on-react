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

export function createComment(id, values) {
  return {
    [API_CALL]: {
      endpoint: `/post/${id}/comments/new`,
      method: 'POST',
      query: {},
      payload: values,
      types: [
        types.CREATE_COMMENT_REQUEST,
        types.CREATE_COMMENT_SUCCESS,
        types.CREATE_COMMENT_ERROR
      ]
    }
  };
}
