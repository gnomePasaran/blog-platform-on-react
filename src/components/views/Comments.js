import React, { PropTypes } from 'react';

import { map } from 'lodash/collection';

import Comment from 'components/views/elements/Comment';

import { Header, Icon, Loader, List } from 'semantic-ui-react';

const Comments = ({ comments, isFetching, error }) => (
  <List divided relaxed>
    <Header as='h2'>
      <Icon name='comments' className='blue' />
      <Header.Content>
        Comments
      </Header.Content>
    </Header>

    { isFetching && Spinner() || comments.length > 0 && map(comments,
      (comment) => (
        <List.Item key={comment.id}>
          <List.Icon name='comment' size='large' verticalAlign='middle' />
          <Comment text={comment.text} phone={comment.phone} />
        </List.Item>
      )
    )}
  </List>
);

const Spinner = () => (
  <Loader active inline content="Loading" />
);

Comments.propTypes = {
  comments: PropTypes.array,
  isFetching: PropTypes.bool,
  error: PropTypes.bool,
};

export default Comments;
