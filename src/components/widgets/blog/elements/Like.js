import React, { PropTypes } from 'react';

import _ from 'lodash';

import { Button } from 'semantic-ui-react';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.blog.meta.count };

    this.handleLikeClick = this.handleLikeClick.bind(this);
  }

  handleLikeClick() {
    this.setState({ count: ++this.state.count });
  }

  render() {
    const { count } = this.state;
    return (
      React.createElement(
        'div',
        null,
        `Likes ${count}`,
        React.createElement(
          Button
          ,  { onClick: () => this.handleLikeClick() }
          , 'Click me!'
        )
      )
    );
  }
}

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
