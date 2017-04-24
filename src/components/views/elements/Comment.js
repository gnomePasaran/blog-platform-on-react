import React, { PropTypes } from 'react';

import { List } from 'semantic-ui-react';

const TextBox = ({ text, phone }) => (
  <List.Content>
    <List.Header>{text}</List.Header>
    <List.Description>{`Phone: ${phone}`}</List.Description>
  </List.Content>
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
