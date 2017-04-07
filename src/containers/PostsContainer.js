import { connect } from 'react-redux';

import Index from 'components/views/Index';

import { createPostLike } from 'actions/Post';

const stateToProps = (state) => ({
  items: state.posts.entries.items,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

const actionsToProps = (dispatch) => ({
  handleLikeClick: (id) => dispatch(createPostLike(id))
});

export default connect(stateToProps, actionsToProps)(Index);
