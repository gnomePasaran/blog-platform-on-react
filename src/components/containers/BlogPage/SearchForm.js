import React, { PropTypes } from 'react';

import { filter } from 'lodash/collection';

import SearchList from 'components/views/SearchList';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { foundBlogs: false };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const rgxp = new RegExp(e.currentTarget.value, 'i');
    const foundBlogs = filter(this.props.blogs,
      (blog) => {
        if (blog.text.search(rgxp) > 0)
          return [blog.id, blog.text];
      });

    this.setState({ foundBlogs });
  }

  render() {
    const { foundBlogs } = this.state;
    return (
      <SearchList foundBlogs={foundBlogs} handlerChange={this.handleChange} />
    );
  }
}

export default SearchForm;

SearchForm.propTypes = {
  blogs: PropTypes.array
};
