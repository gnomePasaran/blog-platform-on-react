import request from 'superagent';

import * as types from 'constants/actionTypes/PostActionTypes';

import { SERVER_PATH } from 'constants/Data';

const requestPosts = (id) => ({
  type: types.FETCH_POST_REQUEST,
  id
});

const responsePosts = (response) => ({
  type: types.FETCH_POST_SUCCESS,
  response
});

const errorPosts = () => ({
  type: types.FETCH_POST_ERROR
});

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(requestPosts(id));

    return request
      .get(`${SERVER_PATH}/post/${id}`)
      .end((err, response) => {
        err ? dispatch(errorPosts()) : dispatch(responsePosts(response.body));
      });
  };
}
