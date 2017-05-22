import React from 'react';
import PropTypes from 'prop-types';

import { map } from 'lodash/collection';

import { Menu } from 'semantic-ui-react';
import Link from 'components/elements/Link';
import Search from 'containers/Search';

const Pagination = ({ activePage, pagesCount, handlePageSelect }) => (
  <Menu pointing>
    {
      map([...Array(pagesCount).keys()].map(x => ++x), (i) => (
        <Menu.Item
          as={Link}
          to={`?page=${i}`}
          key={i}
          name={i.toString()}
          active={activePage === i}
          onClick={() => handlePageSelect(i)}
        />
      ))
    }
    <Menu.Menu position='right'>
      <Search />
    </Menu.Menu>
  </Menu>
);

Pagination.propTypes = {
  activePage: PropTypes.number,
  pagesCount: PropTypes.number,
  handlePageSelect: PropTypes.func
};

export default Pagination;
