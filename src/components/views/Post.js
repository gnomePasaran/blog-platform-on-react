import React, { PropTypes } from 'react';

import Helmet from 'react-helmet';

import { Item } from 'semantic-ui-react';

import BlogItem         from 'components/views/widgets/BlogItem';
import Comments         from 'components/views/Comments';
import CommentContainer from 'containers/CommentContainer';

const Post = ({ item, handleLikeClick, comments, params }) => (
  <Item>
    {item &&
      <Item.Group>
        <BlogItem blog={item} handleLikeClick={handleLikeClick} />
        <Comments
          comments={comments.entries}
          isFetching={comments.isFetching}
          error={comments.error}
        />
        <CommentContainer id={params.id} />
        <Helmet title={item.text} />
      </Item.Group>
    }
  </Item>
);

Post.propTypes = {
  item: PropTypes.object,
  comments: PropTypes.object,
  params: PropTypes.object,
  handleLikeClick: PropTypes.func
};

export default Post;
