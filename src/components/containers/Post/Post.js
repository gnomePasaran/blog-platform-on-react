import React, { PropTypes } from 'react';

import { Item } from 'semantic-ui-react';

import BlogItem from 'components/views/widgets/BlogItem';

const Post = ({ item, handleLikeClick }) => (
  <Item.Group>
    { item && <BlogItem blog={item} handleLikeClick={handleLikeClick} /> }
  </Item.Group>
);

Post.propTypes = {
  item: PropTypes.object,
  handleLikeClick: PropTypes.func
};

export default Post;
