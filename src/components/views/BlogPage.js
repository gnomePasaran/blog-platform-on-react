import React, { PropTypes } from 'react';

import BlogList from 'components/views/widgets/BlogList';
import PieChartContainer from 'components/containers/BlogPage/PieChartContainer';
import Pagination from 'components/views/Pagination';
import SearchForm from 'components/containers/BlogPage/SearchForm';

import { Container, Grid } from 'semantic-ui-react';

const BlogPage = ({ items, changePage }) => (
  <Container>
    <Grid columns={2}>
      <Grid.Column>
        <Pagination activePage={1} pagesCount={5} selectPage={changePage} />
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
