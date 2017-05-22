import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from 'semantic-ui-react';

const SearchList = ({ results, changeSearchQuery,  processSearch, redirectToPost }) => {
  const handleSearchChange = (e, value) => {
    processSearch(value);
    changeSearchQuery(value);
  };

  return (
    <Dropdown
      icon='search'
      style={{color: 'blue'}}
      placeholder='Search...'
      search selection
      options={results}
      onSearchChange={handleSearchChange}
      onChange={redirectToPost}
    />
  );
};

export default SearchList;

SearchList.propTypes = {
  results: PropTypes.array,
  changeSearchQuery: PropTypes.func,
  processSearch: PropTypes.func,
  redirectToPost: PropTypes.func
};
