import React, { PropTypes } from 'react';

import BlogList from 'components/views/Post/widgets/BlogList';
import PieChartContainer from 'components/containers/PieChartContainer';
import Pagination from 'components/views/Pagination';
import SearchForm from 'components/containers/SearchForm';

import { Container, Grid } from 'semantic-ui-react';

const BlogPageView = ({ blogs, activePage, pagesCount, blogsForRender, paginationHandleClick }) => (
  <Container fluid={true}>
    <Grid columns={2}>
      <Grid.Column>
        <Pagination activePage={activePage} pagesCount={pagesCount}
                    paginationHandleClick={paginationHandleClick} />
        <BlogList blogs={blogsForRender} />
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
  activePage: PropTypes.number,
  pagesCount: PropTypes.number,
  blogsForRender: PropTypes.array,
  paginationHandleClick: PropTypes.func
};

export default BlogPageView;
