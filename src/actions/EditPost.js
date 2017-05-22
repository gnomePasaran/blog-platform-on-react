import * as types from 'constants/actionTypes/EditPostActionTypes';

import { API_CALL } from 'middleware/API';

export function editPost(id, values) {
  return {
    [API_CALL]: {
      endpoint: `/post/${id}/edit`,
      method: 'POST',
      query: {},
      payload: values,
      types: [
        types.UPDATE_POST_REQUEST,
        types.UPDATE_POST_SUCCESS,
        types.UPDATE_POST_ERROR
      ]
    }
  };
}
