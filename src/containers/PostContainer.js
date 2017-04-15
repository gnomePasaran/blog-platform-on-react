import { connect } from 'react-redux';

import Post from 'components/views/Post';

import { createPostLike } from 'actions/Post';

const stateToProps = (state) => ({
  item: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});

const actionsToProps = (dispatch) => ({
  handleLikeClick: (id) => dispatch(createPostLike(id))
});

export default connect(stateToProps, actionsToProps)(Post);
