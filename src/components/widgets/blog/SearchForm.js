import React, { PropTypes } from 'react';

import _ from 'lodash';

import SearchList from 'components/widgets/blog/elements/SearchList';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { foundBlogs: false };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const rgxp = new RegExp(e.currentTarget.value, 'i');
    const foundBlogs = _.filter(this.props.blogs,
      (blog) => {
        if (blog.text.search(rgxp) > 0)
          return [blog.id, blog.text];
      });

    this.setState({ foundBlogs });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <ul>
          <SearchList foundBlogs={this.state.foundBlogs} handleChange={this.handleChange} />
        </ul>
      </div>
    );
  }
}

export default SearchForm;

SearchForm.propTypes = {
  blogs: PropTypes.array 
};
