import React, { PropTypes } from 'react';

import { Item } from 'semantic-ui-react';

import BlogItem from 'components/views/widgets/BlogItem';

import request from 'superagent';

import { SERVER_PATH } from 'constants/Data';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blog: null };
  }

  componentDidMount() {
    request
      .get(`${SERVER_PATH}/post/${this.props.params.id}`)
      .send()
      .end((err, res) => {
        this.setState({ blog: res.body });
      });
  }

  render() {
    const { blog } = this.state;
    return (
      <Item.Group>
        { blog && <BlogItem blog={blog} /> }
      </Item.Group>
    );
  }
}

Post.propTypes = {
  params: PropTypes.object
};

export default Post;
