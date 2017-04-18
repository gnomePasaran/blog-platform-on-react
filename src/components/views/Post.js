import React, { PropTypes } from 'react';

import Helmet from 'react-helmet';

import { Item } from 'semantic-ui-react';

import { editPostPath, createCommentPath } from 'helpers/routes';

import BlogItem from 'components/views/widgets/BlogItem';
import Link     from 'components/elements/Link';
import Comments from 'components/views/Comments';

const Post = ({ item, handleLikeClick, comments }) => (
  <div>
    <Item.Group>
      { item && <BlogItem blog={item} handleLikeClick={handleLikeClick} /> }
      { item && <Link to={editPostPath(item.id)} >Edit Post</Link> }
    </Item.Group>
    {item && <Comments
      comments={comments.entries}
      isFetching={comments.isFetching}
      error={comments.error}
    />}
    { <Link to={createCommentPath(item.id)}>Create Comment</Link> }
    {item && <Helmet title={item.text} />}
  </div>
);

Post.propTypes = {
  item: PropTypes.object,
  handleLikeClick: PropTypes.func
};

export default Post;
