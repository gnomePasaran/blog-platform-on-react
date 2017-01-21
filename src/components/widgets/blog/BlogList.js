import React, { DOM, PropTypes } from 'react';

import _ from 'lodash';

import BlogItem from 'components/widgets/blog/BlogItem';

const BlogList = ({blogs, handlerLikes}) => (
  DOM.ul(
    null,
    _.map(
      blogs,
      (blog) => (
        DOM.li(
          { key: blog.id },
          React.createElement(
            BlogItem,
            { blog: blog, handlerLikes: handlerLikes }
          )
        )
      )
    )
  )
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
