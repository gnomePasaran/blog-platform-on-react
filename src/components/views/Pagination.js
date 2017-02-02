import React, { PropTypes } from 'react';

import { map } from 'lodash/collection';

import { Menu } from 'semantic-ui-react';

const Pagination = ({ pagesCount, activePage, paginationHandleClick }) => (
  <Menu pagination>
    {
      map([...Array(pagesCount).keys()].map(x => ++x), (i) => (
        <Menu.Item key={i} name={i.toString()} active={activePage === i} onClick={() => paginationHandleClick(i)} />
      ))
    }
  </Menu>
);

Pagination.propTypes = {
  pagesCount: PropTypes.number,
  activePage: PropTypes.number,
  paginationHandleClick: PropTypes.func
};

export default Pagination;
