import React, { PropTypes } from 'react';

import { Field } from 'redux-form';

import DateField from 'components/views/elements/Form/DateField';

import renderFields from 'components/views/elements/Form/RenderFields';

import { Button, Header, Icon, Item } from 'semantic-ui-react';

const EditPostView = ({ handleSubmit, pristine, submitting, reset }) => (
  <Item>
    <Header as='h1'>
      <Icon name='pencil' className='blue' />
      <Header.Content>
        Edit Post
      </Header.Content>
    </Header>
    <form onSubmit={handleSubmit} className="ui form">
      <Field label="Title" component={renderFields} type="text" name="title" />

      <Field label="Created at" component={DateField} type="date" name="createdAt" />

      <Field label="Author" component={renderFields} type="text" name="author" />
      {(!pristine && !submitting) && <Button basic color='orange' onClick={reset}>Clear</Button>}
      <Button type="submit" primary value="Update">Update</Button>
    </form>
  </Item>
);

export default EditPostView;

EditPostView.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  reset: PropTypes.func,
  handleSubmit: PropTypes.func
};
