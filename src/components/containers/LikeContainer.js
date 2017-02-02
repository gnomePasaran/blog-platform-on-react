import React, { PropTypes } from 'react';

import Like from 'components/views/Post/elements/Like';

class LikeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: this.props.blog.meta.count };

    this.handleLikeClick = this.handleLikeClick.bind(this);
  }

  handleLikeClick() {
    this.setState({ count: ++this.state.count });
  }

  render() {
    const { count } = this.state;
    return (
      <Like count={count} handlerLikes={this.handleLikeClick} />
    );
  }
}

LikeContainer.defaultProps = {
  count: 0,
};

LikeContainer.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.numbers,
    meta: PropTypes.shape({
      count: PropTypes.numbers
    })
  })
  ,
  handlerLikes: PropTypes.func
};

export default LikeContainer;
