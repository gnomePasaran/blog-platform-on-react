import React, { PropTypes } from 'react';

import Helmet from 'react-helmet';

import { Item } from 'semantic-ui-react';

import BlogItem from 'components/views/widgets/BlogItem';

const Post = ({ item, handleLikeClick }) => (
  <div>
    <Item.Group>
      { item && <BlogItem blog={item} handleLikeClick={handleLikeClick} /> }
    </Item.Group>
    {item && <Helmet title={item.text} />}
  </div>
);

Post.propTypes = {
  item: PropTypes.object,
  handleLikeClick: PropTypes.func
};

export default Post;
