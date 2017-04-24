import React, { PropTypes } from 'react';

import BlogList from 'components/views/widgets/BlogList';
import PieChartContainer from 'components/containers/BlogPage/PieChartContainer';
import Pagination from 'containers/Pagination';
import Search from 'containers/Search';

import { Container, Grid, Segment } from 'semantic-ui-react';

const BlogPage = ({ items, location, handleLikeClick }) => (
  <Container>
    <Pagination location={location} />
    <Grid columns={2}>
      <Grid.Column width={9}>
        <BlogList blogs={items} handleLikeClick={handleLikeClick} />
      </Grid.Column>
      <Grid.Column width={7}>
        <Grid.Row>
          <Segment.Group>
            <Segment>
              <Search blogs={items} />
            </Segment>
            <Segment>
              <PieChartContainer columns={items} />
            </Segment>
          </Segment.Group>
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
