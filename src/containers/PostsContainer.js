import { connect } from 'react-redux';

import { flowRight } from 'lodash/util';
import { changePage } from 'actions/Pagination';

import Posts from 'components/views/BlogPage';

const stateToProps = (state) => ({
  items: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

const actionsToProps = (dispatch) => ({
  changePage: flowRight(dispatch, changePage)
});

export default connect(stateToProps, actionsToProps)(Posts);
