import React from 'react';

import _ from 'lodash';

import request from 'superagent';

import BlogList from 'components/widgets/blog/BlogList';
import PieChart from 'components/widgets/blog/PieChart';
import Pagination from 'components/widgets/blog/elements/Pagination';
import SearchForm from 'components/widgets/blog/SearchForm';

import { Container, Grid } from 'semantic-ui-react';

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

    const likesChartData = _.map(blogs, (blog) => (
      [blog.text, blog.meta.count]
    ));

    const {activePage, pagesCount, blogsForRender} = this.paginationCounting();
    return (
      <Container fluid={true}>
        <Grid columns={2}>
          <Grid.Column>
            <Pagination activePage={activePage} pagesCount={pagesCount}
                        paginationHandleClick={this.paginationHandleClick} />
            <BlogList blogs={blogsForRender} />
          </Grid.Column>
          <Grid.Column>
            <Grid.Row>
              <SearchForm blogs={blogs}/>
            </Grid.Row>
            <Grid.Row>
              <PieChart columns={likesChartData} />
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default BlogPage;
