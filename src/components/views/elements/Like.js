import React, { PropTypes } from 'react';

import { Button } from 'semantic-ui-react';

const Like = ({ id, count, handleLikeClick }) => (
    <Button
      onClick={() => handleLikeClick(id)}
      color='blue'
      content='Like'
      icon='heart'
      label={{ basic: true, color: 'blue', pointing: 'left', content: count }}
    />
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
