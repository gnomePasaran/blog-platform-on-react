import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form';

import CreateCommentForm from 'components/views/CreateCommentForm';

import { flowRight } from 'lodash/util';

import { createComment } from 'actions/Comments';

const submit = (values, dispatch, props) => (
  props.createComment(props.id, values).then((response) => {
    if (response.error) {
      throw new SubmissionError(response.error);
    }
  })
);

const validate = (values) => {
  const error = {};

  if (values.text < 5) {
    error.text = 'Should be longer then 5 symbols!';
  }
  if (values.phone === '') {
    error.phone = 'Required!';
  }

  return error;
};

const stateToProps = () => ({
  initialValues: {
    text: '',
    phone: '',
  }
});

const actionsToProps = (dispatch) => ({
  createComment: flowRight(dispatch, createComment)
});

export default connect(
  stateToProps,
  actionsToProps
)(reduxForm({
  form: 'createComment',
  validate,
  onSubmit: submit
})(CreateCommentForm));
