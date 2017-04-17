import React from 'react';
import { Field } from 'redux-form';

import classNames from 'classnames';

const renderFiels = ({ input, label, type, name, meta: { touched, error, warning } }) => (
  <div className={classNames('ui field', { error })}>
    <label>{label}:</label>
    <input className="ui input" {...input} type={type} name={name} />
    {touched && (error && (
      <div className="ui red label">{error}</div>
    ) || (warning && (
      <div className="ui yellow label">{warning}</div>
    )))}
  </div>
);

const EditPostView = ({ handleSubmit, pristine, submitting, reset }) => (
  <div>
    <h1>Edit Post</h1>
    <form onSubmit={handleSubmit} className="ui form">
      <Field label="Title" component={renderFiels} type="text" name="title" />
      <Field label="Created At" component={renderFiels} type="text" name="createdAt" />
      <Field label="Author" component={renderFiels} type="text" name="author" />
      {(!pristine && !submitting) && <button className="ui button" onClick={reset}>Clear</button>}
      <input type="submit" className="ui button primary" value="Update" />
    </form>
  </div>
);

export default EditPostView;
