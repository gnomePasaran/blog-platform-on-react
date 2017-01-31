import React, { PropTypes } from 'react';

import { Item } from 'semantic-ui-react';

import BlogItem from 'components/widgets/blog/BlogItem';

import request from 'superagent';


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blog: false };
  }

  componentDidMount() {
    request
      .get(`http://localhost:3001/posts/${this.props.params.id}`)
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
