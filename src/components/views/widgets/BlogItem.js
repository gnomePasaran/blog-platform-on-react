import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/views/elements/Image';
import TextBox from 'components/views/elements/TextBox';
import Like from 'components/views/elements/Like';

import Link from 'components/elements/Link';

import { editPostPath, postPath } from 'helpers/routes';

import { Button, Divider, Grid, Icon } from 'semantic-ui-react';

const BlogItem = ({ blog, handleLikeClick }) => (
  <Grid columns={3}>
    <Grid.Column width={3}>
      <Image img={blog.img} />
    </Grid.Column>

    <Grid.Column width={8}>
      <TextBox meta={blog.meta} text={<Link to={postPath(blog.id)}>{blog.text}</Link>} />
    </Grid.Column>
    <Grid.Column width={5}>
      <Like id={blog.id} count={blog.meta.count} handleLikeClick={handleLikeClick} />
      <Divider />
      <Button
        basic
        as={Link}
        to={editPostPath(blog.id)}
        color='grey'
        content='Edit'
        icon={<Icon className='pencil' />}
        label={{ basic: true, color: 'grey', pointing: 'left', content: 'Post' }}
      />
    </Grid.Column>
  </Grid>
);

BlogItem.defaultProps = {
  blog: {
    id: 1,
    img: {},
    text: '',
    meta: {}
  },
  handleLikeClick: () => {},
};

BlogItem.propTypes = {
  blog: PropTypes.object,
  handleLikeClick: PropTypes.func
};

export default BlogItem;
