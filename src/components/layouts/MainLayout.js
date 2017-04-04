import React, { PropTypes } from 'react';

import Helmet from 'react-helmet';

import { Segment, Header, Container } from 'semantic-ui-react';
import Link from 'components/elements/Link';

const MainLayout = (props) => (
  <div>
    <Helmet>
      <meta name="description" content="React Blog Platform" />
      <link rel="canonical" href="http://my-react-site.com" />
    </Helmet>
  <Container>
    <Logo />
    { props.goBackButton }
    { props.children }
    <Footer />
  </Container>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
  goBackButton: PropTypes.node
};

export default MainLayout;

const Logo = () => (
  <Segment>
    <Header>
      <Link to='/'>Tinknetica Blog</Link>
    </Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    Powered by React Course.
  </Segment>
);
