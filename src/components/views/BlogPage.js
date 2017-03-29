import React, { PropTypes } from 'react';

import BlogList from 'components/views/widgets/BlogList';
// import PieChartContainer from 'components/containers/BlogPage/PieChartContainer';
// <PieChartContainer columns={items} />
import Pagination from 'containers/Pagination';
import SearchForm from 'containers/Search';

import { Container, Grid } from 'semantic-ui-react';

const BlogPage = ({ items, location, handleLikeClick }) => (
  <Container>
    <Grid columns={2}>
      <Grid.Column>
        <Pagination location={location} />
        <BlogList blogs={items} handleLikeClick={handleLikeClick} />
      </Grid.Column>
      <Grid.Column>
        <Grid.Row>
          <SearchForm blogs={items} />
        </Grid.Row>
        <Grid.Row>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  </Container>
);

BlogPage.propTypes = {
  items: PropTypes.array,
  location: PropTypes.object,
  handleLikeClick: PropTypes.func
};

export default BlogPage;
