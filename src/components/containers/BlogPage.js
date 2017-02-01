import React from 'react';

import request from 'superagent';

import BlogPageView from 'components/views/BlogPageView';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blogs: [] };

    this.paginationHandleClick = this.paginationHandleClick.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
    this.setState({ activePage: 1 });
  }

  paginationHandleClick(activePage) {
    this.setState({ activePage });
    request.get(
      'http://localhost:3001',
      { page: activePage },
      (err, res) => this.setState({ blogs: res.body })
    );
  }

  fetchPosts() {
    request.get(
      'http://localhost:3001',
      {},
      (err, res) => this.setState({ blogs: res.body })
    );
  }

  paginationCounting() {
    const postsOnThePage = 3;
    const { activePage, blogs } = this.state;
    const pagesCount = Math.ceil(blogs.length / postsOnThePage);
    const blogsForRender = blogs
      .slice((activePage - 1) * postsOnThePage, postsOnThePage * (activePage));

    return { pagesCount, blogsForRender };
  }

  render() {
    const { blogs } = this.state;

    const {activePage, pagesCount, blogsForRender} = this.paginationCounting();

    return (
      <BlogPageView blogs={blogs} activePage={activePage}
        pagesCount={pagesCount} blogsForRender={blogsForRender} paginationHandleClick={this.paginationHandleClick} />
    );
  }
}

export default BlogPage;
