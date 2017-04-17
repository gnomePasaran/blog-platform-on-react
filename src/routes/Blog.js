import MainLayoutContainer from 'components/layouts/MainLayoutContainer';
import About               from 'components/views/About';
import PostsContainer      from 'containers/PostsContainer';
import PostContainer       from 'containers/PostContainer';
import Contacts            from 'components/views/Contacts';
import EditPostView        from 'components/views/Edit';
import initialLoad         from 'helpers/initialLoad';

import { aboutPath, contactPath, postPath, editPostPath } from 'helpers/routes';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store, query) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPosts({ page: query.page }));
  }
};

const PostRoutes = {
  path: postPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    return store.dispatch(fetchPost(params.id));
  }
};

const AboutRoutes = {
  path: aboutPath(),
  component: About
};

const ContactRoutes = {
  path: contactPath(),
  component: Contacts
};

export default {
  component: MainLayoutContainer,
  childRoutes: [
    Index,
    PostRoutes,
    AboutRoutes,
    ContactRoutes
  ]
};
