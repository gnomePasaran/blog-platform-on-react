import React, { PropTypes } from 'react';

import Pagination from 'components/views/Pagination';

import { POSTS_ON_THE_PAGE } from 'constants/Data';

class PaginationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activePage: 1 };

    this.selectPage = this.selectPage.bind(this);
  }

  paginationCounting() {
    const postsOnThePage = POSTS_ON_THE_PAGE;
    const { blogs } = this.props;
    const pagesCount = blogs && Math.ceil(blogs.length / postsOnThePage);
    return pagesCount ;
  }

  selectPage(pageId) {
    this.props.paginationHandleClick(pageId);
    this.setState({ activePage: pageId });
  }

  render() {
    const { activePage } = this.state;
    const pagesCount = this.paginationCounting();
    return (
      <Pagination pagesCount={pagesCount} activePage={activePage} selectPage={this.selectPage} />
    );
  }
}

PaginationContainer.propTypes = {
  blogs: PropTypes.array,
  paginationHandleClick: PropTypes.func
};

export default PaginationContainer;
