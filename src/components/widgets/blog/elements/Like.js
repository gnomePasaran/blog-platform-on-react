import React, { PropTypes } from 'react';

import { Button } from 'semantic-ui-react';

const Like = ({ blog, handlerLikes }) => (
  React.createElement(
    'div',
    null,
    `Likes ${blog.meta.count}`,
    React.createElement(
      Button
      ,  { onClick: () => handlerLikes(blog.id) }
      , 'Click me!'
    )
  )
);

Like.defaultProps = {
  count: 0,
};

Like.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.numbers,
    meta: PropTypes.shape({
      count: PropTypes.numbers
    })
  })
  ,
  handlerLikes: PropTypes.func
};

export default Like;
