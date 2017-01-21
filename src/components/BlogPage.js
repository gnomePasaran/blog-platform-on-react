import React from 'react';

import _ from 'lodash';

import { myBlogs as blogs  } from 'constants/static/myBlogs';

import BlogList from 'components/widgets/blog/BlogList';

import PieChart from 'components/widgets/blog/PieChart';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blogs };

    this.handleLikeClick = this.handleLikeClick.bind(this);
  }

  handleLikeClick(blogId) {
    const newBlogs = _.map(blogs, (blog) => {
      if (blog.id === blogId) ++blog.meta.count;
      return blog;
    });

    this.setState({ blogs: newBlogs });
  }

  render() {
    const { blogs } = this.state;
    const likesChartData = _.map(this.state.blogs, (blog) => (
      [blog.text, blog.meta.count]
    ));
    return (
      React.createElement(
        'div',
        {},
        React.createElement(BlogList, {
          blogs: blogs,
          handlerLikes: this.handleLikeClick
        })
        , React.createElement(PieChart, { columns: likesChartData  })
      )
    );
  }
}

export default BlogPage;
