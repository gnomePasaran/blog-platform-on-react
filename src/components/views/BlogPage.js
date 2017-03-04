import React, { PropTypes } from 'react';

import BlogList from 'components/views/widgets/BlogList';
import PieChartContainer from 'components/containers/BlogPage/PieChartContainer';
import Pagination from 'containers/Pagination';
import SearchForm from 'components/containers/BlogPage/SearchForm';

import { Container, Grid } from 'semantic-ui-react';

const BlogPage = ({ items, location }) => (
  <Container>
    <Grid columns={2}>
      <Grid.Column>
        <Pagination location={location} />
        <BlogList blogs={items} />
      </Grid.Column>
      <Grid.Column>
        <Grid.Row>
          <SearchForm blogs={items}/>
        </Grid.Row>
        <Grid.Row>
          <PieChartContainer columns={items} />
        </Grid.Row>
      </Grid.Column>
    </Grid>
  </Container>
);

BlogPage.propTypes = {
  items: PropTypes.array,
};

export default BlogPage;
