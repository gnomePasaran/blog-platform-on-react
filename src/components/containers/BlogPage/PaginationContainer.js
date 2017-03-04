import React, { PropTypes } from 'react';

import Pagination from 'components/views/Pagination';

const PaginationContainer = ({ activePage, itemsCount, itemsOnPage, handlePageSelect }) => {
  const pagesCount = itemsCount && Math.ceil(itemsCount / itemsOnPage);

  return (
    <Pagination activePage={activePage} pagesCount={pagesCount} handlePageSelect={handlePageSelect} />
  );
};

PaginationContainer.propTypes = {
  handlePageSelect: PropTypes.func
};

export default PaginationContainer;
