import { connect } from 'react-redux';

import Posts from 'components/views/BlogPage';

import { createPostLike } from 'actions/Post';

const stateToProps = (state) => ({
  items: state.posts.entries.items,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

export default connect(stateToProps, { handleLikeClick: createPostLike })(Posts);
