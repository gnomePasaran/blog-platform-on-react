import React, { PropTypes } from 'react';

import { Button, Segment, Header, Container } from 'semantic-ui-react';
import Link from 'components/elements/Link';

import history from 'helpers/history';

const MainLayout = (props) => (
  <Container>
    <Logo />
    { props.location.pathname != '/' && <GoBackButton />}
    { props.children }
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object
};

export default MainLayout;

const GoBackButton = () => (
  <Button onClick={() => history.goBack()}>Назад</Button>
);

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
