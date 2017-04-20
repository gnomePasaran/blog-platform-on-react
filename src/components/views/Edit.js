import React, { PropTypes } from 'react';

import { Field } from 'redux-form';

import DateField from 'components/views/elements/Form/DateField';

import renderFields from 'components/views/elements/Form/RenderFields';

const EditPostView = ({ handleSubmit, pristine, submitting, reset }) => (
  <div>
    <h1>Edit Post</h1>
    <form onSubmit={handleSubmit} className="ui form">
      <Field label="Title" component={renderFields} type="text" name="title" />

      <Field label="Created at" component={DateField} type="date" name="createdAt" />

      <Field label="Author" component={renderFields} type="text" name="author" />
      {(!pristine && !submitting) && <button className="ui button" onClick={reset}>Clear</button>}
      <input type="submit" className="ui button primary" value="Update" />
    </form>
  </div>
);

export default EditPostView;

EditPostView.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  reset: PropTypes.func,
  handleSubmit: PropTypes.func
};
