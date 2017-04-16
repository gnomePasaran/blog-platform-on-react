import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';

import { flowRight } from 'lodash/util';

import { editPost } from 'actions/EditPost';

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


const submit = (values, dispatch, props) => (
  props.updatePost(props.params.id, values).then((response) => {
    if (response.error) {
      throw new SubmissionError(response.error);
    }
  })
);

const asyncValidate = (values, dispatch, props) => (
  props.updatePost(props.params.id, values).then((response) => {
    if (response.error)
      throw response.error;
  })
);

const stateToProps = (state) => ({
  initialValues: {
    title: state.post.entry.text,
    createdAt: state.post.entry.meta.createdAt,
    author: state.post.entry.meta.author,
  }
});

const actionsToProps = (dispatch) => ({
  updatePost: flowRight(dispatch, editPost)
});

export default connect(
  stateToProps
  , actionsToProps
)(reduxForm({
  form: 'editPost',
  asyncValidate,
  onSubmit: submit
})(EditPostView));
