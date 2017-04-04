import { connect } from 'react-redux';

import Post from 'components/views/Post';

import { createPostLike } from 'actions/Post';

const stateToProps = (state) => ({
  item: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});

export default connect(stateToProps, { handleLikeClick: createPostLike })(Post);
