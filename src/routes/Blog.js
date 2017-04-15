import MainLayoutContainer from 'components/layouts/MainLayoutContainer';
import About               from 'components/views/About';
import PostsContainer      from 'containers/PostsContainer';
import PostContainer       from 'containers/PostContainer';

import { aboutPath, postPath } from 'helpers/routes';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store, query) => {
    store.dispatch(fetchPosts({ page: query.page }));
  }
};

const PostRoutes = {
  path: postPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id));
  }
};

const AboutRoutes = {
  path: aboutPath(),
  component: About
};

export default {
  component: MainLayoutContainer,
  childRoutes: [
    Index,
    PostRoutes,
    AboutRoutes
  ]
};
