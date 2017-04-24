import React, { PropTypes } from 'react';

import { map } from 'lodash/collection';

import Link from 'components/elements/Link';
import { postPath } from 'helpers/routes';

import { Input } from 'semantic-ui-react';

class SearchList extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e) {
    this.props.processSearch(e.currentTarget.value);
    this.props.changeSearchQuery(e.currentTarget.value);
  }

  render() {
    const foundBlogsList = map(this.props.results,
      (blog) => (
        <li key={blog.id}>
          <Link to={postPath(blog.id)}>{blog.text}</Link>
        </li>
      )
    );

    return (
      <div>
        <Input
          fluid
          type="text"
          icon='search'
          placeholder='Search...'
          onChange={this.handleSearchChange}
        />
        <ul>
          {foundBlogsList}
        </ul>
      </div>
    );
  }
}

export default SearchList;

SearchList.propTypes = {
  foundBlogs: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool
  ]),
  processSearch: PropTypes.func,
  changeSearchQuery: PropTypes.func,
  results: PropTypes.array
};
