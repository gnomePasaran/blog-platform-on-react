import React, { PropTypes } from 'react';

import { map } from 'lodash/collection';

import { Menu } from 'semantic-ui-react';

const Pagination = ({ activePage, pagesCount, selectPage }) => (
  <Menu pagination>
    {
      map([...Array(pagesCount).keys()].map(x => ++x), (i) => (
        <Menu.Item key={i} name={i.toString()} active={activePage === i} onClick={() => selectPage(i)} />
      ))
    }
  </Menu>
);

Pagination.propTypes = {
  activePage: PropTypes.number,
  pagesCount: PropTypes.number,
  selectPage: PropTypes.func
};

export default Pagination;
