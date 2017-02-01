import React, { PropTypes } from 'react';

import { map } from 'lodash/collection';

import Link from 'components/elements/Link';
import { postsPath } from 'helpers/routes';

const SearchList = ({ foundBlogs, handlerChange }) => {
  const foundBlogsList = map(foundBlogs,
    (blog) => (
      <li key={blog.id}>
        <Link to={postsPath(blog.id)}>{blog.text}</Link>
      </li>
    )
  );

  return (
    <div>
      <input type="text" onChange={handlerChange} />
      <ul>
        {foundBlogsList}
      </ul>
    </div>
  );
};

export default SearchList;

SearchList.propTypes = {
  foundBlogs: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool
  ]),
  handlerChange: PropTypes.func
};
