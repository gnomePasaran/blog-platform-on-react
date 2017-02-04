import React, { PropTypes } from 'react';

import { Button } from 'semantic-ui-react';

const Like = ({ count, handlerLikes }) => (
  <div>
    {`Likes ${count}`}
    <Button onClick={() => handlerLikes()}>
      'Click me!'
    </ Button>
  </div>
);

Like.defaultProps = {
  count: 0,
};

Like.propTypes = {
  count: PropTypes.number,
  handlerLikes: PropTypes.func
};

export default Like;
