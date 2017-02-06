import MainLayoutContainer from 'components/layouts/MainLayoutContainer';
import About               from 'components/views/About';
import BlogPageContainer   from 'components/containers/BlogPage/BlogPageContainer';
import PostContainer       from 'components/containers/Post/PostContainer';

import { aboutPath, postsPath } from 'helpers/routes';

const Index = {
  path: '/',
  component: BlogPageContainer
};

const PostRoutes = {
  path: postsPath(),
  component: PostContainer
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
