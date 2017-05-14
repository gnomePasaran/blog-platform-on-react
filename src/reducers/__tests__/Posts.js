import reducer from '../Posts';
import * as types from 'constants/actionTypes/PostsActionTypes';

describe('posts reducer', () => {
  it('should process FETCH_POST_REQUEST', () => {
    expect(
      reducer({}, {
        type: types.FETCH_POSTS_REQUEST
      })
    ).toHaveProperty('isFetching', true);
  });

  it('should process FETCH_POSTS_ERROR', () => {
    expect(
      reducer({}, {
        type: types.FETCH_POSTS_ERROR
      })
    ).toHaveProperty('error', true);
  });

  it('should process FETCH_POSTS_SUCCESS', () => {
    expect(
      reducer({}, {
        type: types.FETCH_POSTS_SUCCESS,
        response: {}
      })
    ).toHaveProperty('isFetching', false);
  });

  it('should process CREATE_POST_LIKE_SUCCESS', () => {
    const beginsState = {
      entries: {
        items: [
          {
            id: 1,
            meta: {
              count: 1
            }
          }
        ]
      }
    };

    expect(
      reducer(beginsState, {
        type: types.CREATE_POST_LIKE_SUCCESS,
        response: {
          id: 1,
          meta: {
            count: 2
          }
        }
      })
    ).toEqual({
      entries: {
        items: [
          {
            id: 1,
            meta: {
              count: 2
            }
          }
        ]
      },
      isFetching: false,
      error: false
    });
  });
});
