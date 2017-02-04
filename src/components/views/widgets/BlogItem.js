import React, { PropTypes } from 'react';

import Image from 'components/views/elements/Image';
import TextBox from 'components/views/elements/TextBox';
import LikeContainer from 'components/containers/LikeContainer';

import Link from 'components/elements/Link';

import { postsPath } from 'helpers/routes';

const BlogItem = (props) => (
  <div>
    <Image img={props.blog.img} />
    <TextBox meta={props.blog.meta} text={ <Link to={postsPath(props.blog.id)}>{props.blog.text}</Link> } />
    <LikeContainer blog={props.blog} />
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
  handlerLikes: PropTypes.func
};

export default BlogItem;
