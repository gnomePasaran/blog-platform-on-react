import React, { PropTypes } from 'react';

import { Dropdown } from 'semantic-ui-react';

const SearchList = ({ results, changeSearchQuery,  processSearch, redirectToPost }) => {
  const handleSearchChange = (e, value) => {
    processSearch(value);
    changeSearchQuery(value);
  };

  return (
    <Dropdown
      placeholder='Search...'
      fluid search selection
      color="blue"
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
