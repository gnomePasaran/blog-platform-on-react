import React, { PropTypes } from 'react';

import { Button } from 'semantic-ui-react';

const Like = ({ id, count, handleLikeClick }) => (
  <div>
    {`Likes ${count}`}
    <Button onClick={() => handleLikeClick(id)}>
      'Click me!'
    </ Button>
  </div>
);

Like.defaultProps = {
  count: 0,
};

Like.propTypes = {
  id: PropTypes.number,
  count: PropTypes.number,
  handleLikeClick: PropTypes.func
};

export default Like;
