import React from 'react';
import PropTypes from 'prop-types';

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
  id: 1,
  count: 0,
  handleLikeClick: () => {},
};

Like.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  count: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  handleLikeClick: PropTypes.func
};

export default Like;
