import React, { PropTypes } from 'react';

import BlogList from 'components/views/widgets/BlogList';
import PieChartContainer from 'components/containers/BlogPage/PieChartContainer';
import PaginationContainer from 'components/containers/BlogPage/PaginationContainer';
import SearchForm from 'components/containers/BlogPage/SearchForm';

import { Container, Grid } from 'semantic-ui-react';

const BlogPageView = ({ blogs, blogsOnPage, paginationHandleClick }) => (
  <Container>
    <Grid columns={2}>
      <Grid.Column>
        <PaginationContainer blogs={blogs} paginationHandleClick={paginationHandleClick} />
        <BlogList blogs={blogsOnPage} />
      </Grid.Column>
      <Grid.Column>
        <Grid.Row>
          <SearchForm blogs={blogs}/>
        </Grid.Row>
        <Grid.Row>
          <PieChartContainer columns={blogs} />
        </Grid.Row>
      </Grid.Column>
    </Grid>
  </Container>
);

BlogPageView.propTypes = {
  blogs: PropTypes.array,
  blogsOnPage: PropTypes.array,
  paginationHandleClick: PropTypes.func
};

export default BlogPageView;
