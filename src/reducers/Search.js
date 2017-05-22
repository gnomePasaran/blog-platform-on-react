import * as types from 'constants/actionTypes/SearchActionTypes';
import { assign } from 'lodash';

import { map } from 'lodash/collection';
import { postPath } from 'helpers/routes';

const initialState = {
  isLoading: false,
  results: [],
  value: '',
};

const foundBlogsList = (blogs) => (
  map(blogs,
    (blog) => ({
      key: `${blog.id}`,
      value: postPath(blog.id),
      text: blog.text
    })
  )
);

export default function (state = initialState, action) {
  const { type, response } = action;

  switch (type) {
    case types.CHANGE_SEARCH_STING:
      return assign({}, initialState, { value: response });
    case types.SEARCH_REQUEST:
      return assign({}, initialState, { isLoading: true });
    case types.SEARCH_SUCCESS:
      return assign({}, initialState, { results: foundBlogsList(response) });
    case types.SEARCH_ERROR:
      return assign({}, initialState);
    default:
      return state;
  }
}
