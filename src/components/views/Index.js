import React from 'react';

import Helmet from 'react-helmet';

import BlogPage from 'components/views/BlogPage';

const Index = ({ items, location, handleLikeClick }) => (
  <div>
    <BlogPage items={items} location={location} handleLikeClick={handleLikeClick} />
    <Helmet
      title='Список постов'
    />
  </div>
);

Index.propTypes = {
  items: BlogPage.propTypes.items,
  location: BlogPage.propTypes.location,
  handleLikeClick: BlogPage.propTypes.handleLikeClick
};

export default Index;
