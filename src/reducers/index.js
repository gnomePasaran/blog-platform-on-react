import { combineReducers } from 'redux';

import posts from './Posts';
import post from './Post';
import search from './Search';

export default combineReducers({
  posts,
  post,
  search
});
