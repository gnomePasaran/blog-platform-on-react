import React, { PropTypes } from 'react';

import { map } from 'lodash/collection';

import { Menu } from 'semantic-ui-react';
import Link from 'components/elements/Link';

const Pagination = ({ activePage, pagesCount, handlePageSelect }) => (
  <Menu pagination>
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
  </Menu>
);

Pagination.propTypes = {
  activePage: PropTypes.number,
  pagesCount: PropTypes.number,
  handlePageSelect: PropTypes.func
};

export default Pagination;
