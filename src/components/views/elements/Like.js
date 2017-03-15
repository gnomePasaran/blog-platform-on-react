import React, { PropTypes } from 'react';

import { Button } from 'semantic-ui-react';

const Like = ({ blog, handleLikeClick }) => (
  <div>
    {`Likes ${blog.meta.count}`}
    <Button onClick={() => handleLikeClick(blog.id)}>
      'Click me!'
    </ Button>
  </div>
);

Like.defaultProps = {
  count: 0,
};

Like.propTypes = {
  count: PropTypes.number,
  handleLikeClick: PropTypes.func
};

export default Like;
