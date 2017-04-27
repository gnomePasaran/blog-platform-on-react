import { connect } from 'react-redux';

import SearchList from 'components/views/SearchList';
import { search, changeSearchString } from 'actions/Search';

import history from 'helpers/history';

const redirectToPost = (e, data) => (
  history.push(data.value)
);

const stateToProps = (state) => {
  const  { isLoading, results, value } = state.search;
  return {
    isLoading,
    results,
    value,
    redirectToPost
  };
};

const actionsToProps = (dispatch) => ({
  processSearch(value) {
    dispatch(search({ q: value }));
  },

  changeSearchQuery(value) {
    dispatch(changeSearchString(value));
  },

  redirectToPost
});

export default connect(stateToProps, actionsToProps)(SearchList);
