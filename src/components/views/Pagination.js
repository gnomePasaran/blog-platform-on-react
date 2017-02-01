import React, { PropTypes } from 'react';

import { Menu } from 'semantic-ui-react';

const Pagination = ({ pagesCount, activePage, paginationHandleClick }) => {
  const menues = [];
  for (let i = 1; i <= pagesCount; i++)
    menues.push(
      <Menu.Item
        key={i}
        name={i.toString()}
        active={activePage === i}
        onClick={() => paginationHandleClick(i)}
      />
    );

  return (
    <Menu pagination>
      {menues}
    </Menu>
  );
};

Pagination.propTypes = {
  pagesCount: PropTypes.number,
  activePage: PropTypes.number,
  paginationHandleClick: PropTypes.func
};

export default Pagination;
