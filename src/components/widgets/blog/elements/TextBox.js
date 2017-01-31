import React, { DOM, PropTypes } from 'react';

import Link from 'components/elements/Link';

import { postsPath } from 'helpers/routes';

const Span = (props) => (
  DOM.span(
    {
//       style: { border: '1px solid red' }
    },
    props.children
  )
);

Span.defaultProps = {
  children: Span
};

Span.PropTypes = {
  children: PropTypes.instanceOf(Span)
};


const TextBox = ({ id, text, meta }) => (
  React.createElement(
    Span,
    {}
    , React.createElement(Link, { to: postsPath(id) }, text)
    , React.createElement(
        'div',
        null,
        `Author: ${meta.author} |
         Created at: ${meta.createdAt || ''} |
         Updated at: ${meta.updatedAt || ''}`
      )
  )
);

TextBox.defaultProps = {
  text: '',
  author: 'Secret Person',
};

TextBox.propTypes = {
  id:  PropTypes.number,
  text: PropTypes.string,
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
