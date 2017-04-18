import React, { PropTypes } from 'react';

import { map } from 'lodash/collection';

import { Loader } from 'semantic-ui-react';

import Comment from 'components/views/elements/Comment';

const Comments = ({ comments, isFetching, error }) => (
  <div>
    <ul>
      { isFetching && Spinner() || comments.length > 0 && map(comments,
        (comment) => (
          <li key={comment.id}>
            <Comment text={comment.text} phone={comment.phone} />
          </li>
        )
      )}
    </ul>
  </div>
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
