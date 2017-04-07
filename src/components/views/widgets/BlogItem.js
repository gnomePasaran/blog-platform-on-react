import React, { PropTypes } from 'react';

import Image from 'components/views/elements/Image';
import TextBox from 'components/views/elements/TextBox';
import Like from 'components/views/elements/Like';

import Link from 'components/elements/Link';

import { postPath } from 'helpers/routes';

const BlogItem = ({ blog, handleLikeClick }) => (
  <div>
    <Image img={blog.img} />
    <TextBox meta={blog.meta} text={ <Link to={postPath(blog.id)}>{blog.text}</Link> } />
    <Like id={blog.id} count={blog.meta.count} handleLikeClick={handleLikeClick} />
  </div>
);

BlogItem.defaultProps = {
  blog: {
    img:{},
    text: '',
    meta: {}
  },
};

BlogItem.propTypes = {
  blog: PropTypes.object,
  handleLikeClick: PropTypes.func
};

export default BlogItem;
