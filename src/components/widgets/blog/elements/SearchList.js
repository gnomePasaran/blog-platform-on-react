import React, { PropTypes } from 'react';

import _ from 'lodash';

import Link from 'components/elements/Link';
import { postsPath } from 'helpers/routes';

const SearchList = ({ foundBlogs, handleChange }) => {
  const foundBlogsList = _.map(foundBlogs,
    (blog) => (
      <li key={blog.id}>
        <Link to={postsPath(blog.id)}>{blog.text}</Link>
      </li>
    )
  );

  return (
    <ul>
      {foundBlogsList}
    </ul>
  );
};

export default SearchList;

SearchList.propTypes = {
  foundBlogs: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool
  ]),
  handleChange: PropTypes.func
};
