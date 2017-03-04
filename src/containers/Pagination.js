import { connect } from 'react-redux';

import PaginationContainer from 'components/containers/BlogPage/PaginationContainer';
import { ITEMS_ON_PAGE } from 'constants/Data';

import history from 'helpers/history';

function fetchCurrentPosts(props) {
  const { page } = props.location.query;
  return parseInt(page) || 1;
}

function handlePageSelect(activePage) {
  const path = activePage === 1 ? '/' : `/?page=${activePage}`;
  history.push(path);
}

const stateToProps = (state, ownProps) => {
  const itemsCount = state.posts.entries.count;

  return {
    itemsCount,
    activePage: fetchCurrentPosts(ownProps),
    itemsOnPage: ITEMS_ON_PAGE,
    handlePageSelect
  };
};

export default connect(stateToProps)(PaginationContainer);
