import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form';

import EditPostView from 'components/views/Edit';

import { flowRight } from 'lodash/util';
import { get } from 'lodash/object';

import { editPost } from 'actions/EditPost';

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
    title: get(state, 'post.entry.text', ''),
    createdAt: get(state, 'post.entry.meta.createdAt', ''),
    author: get(state, 'post.entry.meta.author', '')
  }
});

const actionsToProps = (dispatch) => ({
  updatePost: flowRight(dispatch, editPost)
});

export default connect(
  stateToProps,
  actionsToProps
)(reduxForm({
  form: 'editPost',
  asyncValidate,
  onSubmit: submit,
  enableReinitialize: true
})(EditPostView));
