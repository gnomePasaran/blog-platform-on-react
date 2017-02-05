import React from 'react';

import request from 'superagent';

import BlogPageView from 'components/views/BlogPage';

import { SERVER_PATH } from 'constants/Data';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blogs: null };

    this.paginationHandleClick = this.paginationHandleClick.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
    this.paginationHandleClick(1);
  }

  paginationHandleClick(activePage) {
    this.setState({ activePage });
    request.get(
      `${SERVER_PATH}/posts/${activePage}`,
      (err, res) => this.setState({ blogsOnPage: res.body })
    );
  }

  fetchPosts() {
    request.get(
      SERVER_PATH,
      {},
      (err, res) => this.setState({ blogs: res.body })
    );
  }

  render() {
    const { blogs, blogsOnPage } = this.state;
    return (
      <BlogPageView blogs={blogs} blogsOnPage={blogsOnPage} paginationHandleClick={this.paginationHandleClick} />
    );
  }
}

export default BlogPage;
