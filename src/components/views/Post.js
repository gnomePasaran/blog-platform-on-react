import React, { PropTypes } from 'react';

import Helmet from 'react-helmet';

import { Item } from 'semantic-ui-react';

import { editPostPath } from 'helpers/routes';

import BlogItem from 'components/views/widgets/BlogItem';
import Link     from 'components/elements/Link';

const Post = ({ item, handleLikeClick }) => (
  <div>
    <Item.Group>
      { item && <BlogItem blog={item} handleLikeClick={handleLikeClick} /> }
      { item && <Link to={editPostPath(item.id)} >Edit Post</Link> }
    </Item.Group>
    {item && <Helmet title={item.text} />}
  </div>
);

Post.propTypes = {
  item: PropTypes.object,
  handleLikeClick: PropTypes.func
};

export default Post;
