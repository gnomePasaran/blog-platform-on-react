import React, { DOM, PropTypes } from 'react';

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


const TextBox = (props) => (
  React.createElement(
    Span,
    {}
    , props.text
    , React.createElement(
        'div',
        null,
        `Author: ${props.author} |
         Created at: ${props.createdAt || ''} |
         Updated at: ${props.updatedAt || ''}`
      )
  )
);

TextBox.defaultProps = {
  text: '',
  author: 'Secret Person',
};

TextBox.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
  createdAt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.numbers
  ]),
  updatedAt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.numbers
  ]),
};

export default TextBox;
