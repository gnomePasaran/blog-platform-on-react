import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import classNames from 'classnames';

const validate = (values) => {
  const errors = {};
  // if (values.title.length < 1)
  //   errors.title = "Title's length is longer then 1 symbols.";

  return errors;
};

const warn = (values) => {
  const warnings = {};
  if (values.title.length < 5)
    warnings.title = "Recommendantly title's length is longer then 5 symbols.";

  return warnings;
};

const renderFiels = ({input, label, type, meta: { touched, error, warning } }) => (
  <div className={classNames('ui field', { error })}>
    <label>{label}:</label>
    <input className="ui input" {...input} type={type} name="title" />
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

const sleep = (ms) => (
  new Promise(
    (resolve) => (setTimeout(resolve, ms))
  )
);

export default connect(
  (state) => ({
    initialValues: {
      title: state.post.entry.text,
      createdAt: state.post.entry.meta.createdAt,
      author: state.post.entry.meta.author,
    }
  })
)(reduxForm({
  form: 'editPost',
  validate,
  warn,
  onSubmit: (values) => (alert(JSON.stringify(values)))
})(EditPostView));
