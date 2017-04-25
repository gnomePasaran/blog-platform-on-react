import { connect } from 'react-redux';

import Pagination from 'components/views/Pagination';

import { ITEMS_ON_PAGE as itemsOnPage } from 'constants/Data';

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
  const pagesCount = itemsCount && Math.ceil(itemsCount / itemsOnPage);

  return {
    activePage: fetchCurrentPosts(ownProps),
    pagesCount,
    handlePageSelect
  };
};

export default connect(stateToProps)(Pagination);
