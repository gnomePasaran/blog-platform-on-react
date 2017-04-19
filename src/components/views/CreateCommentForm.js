import React from 'react';
import { Field } from 'redux-form';

import renderFields from 'components/views/elements/Form/RenderFields';
import normalizePhone from 'components/views/elements/Form/normalizePhone';

const CreateCommentForm = ({ handleSubmit, pristine, submitting, reset }) => (
  <div>
    <h1>Create Comment</h1>
    <form onSubmit={handleSubmit} className="ui form">
      <Field label="Text" component={renderFields} type="text" name="text" />
      <Field label="Phone" component={renderFields} type="text" name="phone" normalize={normalizePhone} />
      {(!pristine && !submitting) && <button className="ui button" onClick={reset}>Clear</button>}
      <input type="submit" className="ui button primary" value="Update" />
    </form>
  </div>
);

export default CreateCommentForm;
