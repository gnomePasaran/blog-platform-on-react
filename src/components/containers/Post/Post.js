import React, { PropTypes } from 'react';

import { Item } from 'semantic-ui-react';

import BlogItem from 'components/views/widgets/BlogItem';

const Post = ({ item }) => (
  <Item.Group>
    { item && <BlogItem blog={item} /> }
  </Item.Group>
);

Post.propTypes = {
  item: PropTypes.object
};

export default Post;
