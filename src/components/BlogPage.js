import React from 'react';

import _ from 'lodash';

import request from 'superagent';

import BlogList from 'components/widgets/blog/BlogList';
import PieChart from 'components/widgets/blog/PieChart';

import { Menu } from 'semantic-ui-react';

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
    console.log(this.state.blogs);
  }

  fetchPosts() {
    request.get(
      'http://localhost:3001',
      {},
      (err, res) => this.setState({ blogs: res.body })
    );
  }

  render() {
    const { activePage, blogs } = this.state;

    const postsOnThePage = 3;
    const pagesCount = Math.ceil(blogs.length / postsOnThePage);

    const likesChartData = _.map(this.state.blogs, (blog) => (
      [blog.text, blog.meta.count]
    ));

    const menus = [];
    for (let i = 1; i <= pagesCount; i++) {
      menus.push(<Menu.Item name={i} active={activePage === i} onClick={() => this.paginationHandleClick(i)} />);
    }

    const blogsForRender = blogs.slice((activePage - 1) * postsOnThePage, postsOnThePage * (activePage));
    return (
      <div>
        <Menu pagination>
          {menus}
        </Menu>
        <BlogList blogs={blogsForRender} />
      </div>
      // React.createElement(
        // 'div',
        // {}
        //, React.createElement(BlogList, { blogs })
        // , React.createElement(PieChart, { columns: likesChartData  })
      );
    // );
  }
}

export default BlogPage;
