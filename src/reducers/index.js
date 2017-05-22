import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import posts from './Posts';
import post from './Post';
import search from './Search';
import editPost from './EditPost';
import comments from './Comments';

export default combineReducers({
  posts,
  post,
  search,
  form: formReducer,
  editPost,
  comments
});
