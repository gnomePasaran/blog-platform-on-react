import React from 'react';
import { Field } from 'redux-form';

import renderFields from 'components/views/elements/Form/RenderFields';

const EditPostView = ({ handleSubmit, pristine, submitting, reset }) => (
  <div>
    <h1>Edit Post</h1>
    <form onSubmit={handleSubmit} className="ui form">
      <Field label="Title" component={renderFields} type="text" name="title" />
      <Field label="Created At" component={renderFields} type="text" name="createdAt" />
      <Field label="Author" component={renderFields} type="text" name="author" />
      {(!pristine && !submitting) && <button className="ui button" onClick={reset}>Clear</button>}
      <input type="submit" className="ui button primary" value="Update" />
    </form>
  </div>
);

export default EditPostView;
