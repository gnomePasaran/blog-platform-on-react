import React, { PropTypes } from 'react';

import { map } from 'lodash/collection';

import BlogItem from 'components/views/widgets/BlogItem';

const BlogList = ({ blogs, handleLikeClick }) => (
  <ul>
    {map(blogs, (blog) => (<li key={blog.id}><BlogItem blog={blog} handleLikeClick={handleLikeClick} /></li>))}
  </ul>
);

BlogList.defaultProps = {
  blogs: []
};

BlogList.propTypes = {
  blogs: PropTypes.array,
  handleLikeClick: PropTypes.func
};

export default BlogList;
