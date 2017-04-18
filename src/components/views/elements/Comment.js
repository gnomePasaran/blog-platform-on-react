import React, { PropTypes } from 'react';

const TextBox = ({ text, phone }) => (
  <div>
    <div>
      {text}
    </div>
    <div>
      {`Phone: ${phone}`}
    </div>
  </div>
);

TextBox.defaultProps = {
  text: '',
  phone: '',
};

TextBox.propTypes = {
  text: PropTypes.node,
  phone: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

export default TextBox;
