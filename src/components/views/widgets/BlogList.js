import React from 'react';
import PropTypes from 'prop-types';

import { map } from 'lodash/collection';

import BlogItem from 'components/views/widgets/BlogItem';

import { Segment } from 'semantic-ui-react';

const BlogList = ({ blogs, handleLikeClick }) => (
  <Segment.Group>
    {map(blogs, (blog) => (
      <Segment key={blog.id}>
        <BlogItem blog={blog} handleLikeClick={handleLikeClick} />
      </Segment>)
    )}
  </Segment.Group>
);

BlogList.defaultProps = {
  blogs: []
};

BlogList.propTypes = {
  blogs: PropTypes.array,
  handleLikeClick: PropTypes.func
};

export default BlogList;
