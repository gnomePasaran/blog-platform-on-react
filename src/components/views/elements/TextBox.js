import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Divider } from 'semantic-ui-react';

const TextBox = ({ text, meta }) => (
  <span>
    {text}
    <Divider fitted />
    <Grid.Row>
      Author: {<i>{meta.author || 'Anonymous'}</i>}
    </Grid.Row>
    <Grid.Row>
      {`Created at: ${meta.createdAt || ''}`}
    </Grid.Row>
    <Grid.Row>
      {`Updated at: ${meta.updatedAt || ''}`}
    </Grid.Row>
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
