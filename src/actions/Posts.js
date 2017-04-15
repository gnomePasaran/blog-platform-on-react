import request from 'superagent';

import * as types from 'constants/actionTypes/PostsActionTypes';

import { SERVER_PATH } from 'constants/Data';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const responsePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(`${SERVER_PATH}/`)
      .end((err, response) => {
        err ? dispatch(errorPosts()) : dispatch(responsePosts(response.body));
      });
  };
}
