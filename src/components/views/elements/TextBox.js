import React, { PropTypes } from 'react';

const TextBox = ({ text, meta }) => (
  <span>
    <div>
      {text}
      {`
        Author: ${meta.author} | Created at: ${meta.createdAt || ''} | Updated at: ${meta.updatedAt || ''}`}
    </div>
  </span>
);

TextBox.defaultProps = {
  text: '',
  author: 'Secret Person',
};

TextBox.propTypes = {
  text: PropTypes.node,
  meta: PropTypes.object,
  author: PropTypes.string,
  createdAt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  updatedAt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.numbers
  ]),
};

export default TextBox;
