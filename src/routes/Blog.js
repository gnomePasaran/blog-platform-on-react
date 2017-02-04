import MainLayoutContainer from 'components/layouts/MainLayoutContainer';
import About      from 'components/views/About';
import BlogPage   from 'components/containers/BlogPage';
import Post       from 'components/containers/Post';

import { aboutPath, postsPath } from 'helpers/routes';

const Index = {
  path: '/',
  component: BlogPage
};

const PostRoutes = {
  path: postsPath(),
  component: Post
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
