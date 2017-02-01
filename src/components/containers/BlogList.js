import React, { PropTypes } from 'react';

import { map } from 'lodash/collection';

import BlogItem from 'components/views/BlogItem';

const BlogList = ({ blogs, handlerLikes }) => (
  <ul>
    {map(blogs, (blog) => (<li key={blog.id}><BlogItem blog={blog} handlerLikes={handlerLikes} /></li>))}
  </ul>
);

BlogList.defaultProps = {
  blogs: []
};

BlogList.PropTypes = {
  blogs: PropTypes.shape(
    BlogItem.PropTypes
  )
};

export default BlogList;
