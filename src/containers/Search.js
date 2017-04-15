import { connect } from 'react-redux';

import SearchList from 'components/views/SearchList';
import { search, changeSearchString } from 'actions/Search';

const stateToProps = (state) => {
  const  { isLoading, results, value } = state.search;
  return { isLoading, results, value };
};

const actionsToProps = (dispatch) => ({
  processSearch(value) {
    dispatch(search({ q: value }));
  },

  changeSearchQuery(value) {
    dispatch(changeSearchString(value));
  }
});

export default connect(stateToProps, actionsToProps)(SearchList);
