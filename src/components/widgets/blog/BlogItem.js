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
    React.createElement(
      'div',
      {}
      , React.createElement(
        TextBox
        , assign({}, props.blog, { text: props.blog.text })
      )
      , React.createElement(Like, { blog: props.blog })
    )
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
  handlerLikes: PropTypes.func
};

export default BlogItem;
