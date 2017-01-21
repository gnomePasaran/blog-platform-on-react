import React, { PropTypes } from 'react';

import { assign } from 'lodash';

import Image from 'components/widgets/blog/elements/Image';

import TextBox from 'components/widgets/blog/elements/TextBox';

import Like from 'components/widgets/blog/elements/Like';

const BlogItem = (props) => (
  React.createElement(
    'div',
    null,
    React.createElement(Image, assign({}, props.blog.img)),
    React.createElement(TextBox, assign({}, props.blog.meta, { text: props.blog.text })),
    React.createElement(Like, { blog: props.blog, handlerLikes: props.handlerLikes })
  )
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
};

export default BlogItem;
