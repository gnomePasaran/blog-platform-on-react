import MainLayout from 'components/layouts/MainLayout';
import About      from 'components/About';
import BlogPage   from 'components/BlogPage';
import Post       from 'components/Post';

import { postsPath } from 'helpers/routes';

const Index = {
  path: '/',
  component: BlogPage
};

const PostRoutes = {
  path: postsPath(),
  component: Post
};

const AboutRoutes = {
  path: '/about',
  component: About
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoutes,
    AboutRoutes
  ]
};
