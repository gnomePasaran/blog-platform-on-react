import React, { PropTypes } from 'react';

import { Button, Segment, Header, Container } from 'semantic-ui-react';
import Link from 'components/elements/Link';
import { contactPath } from 'helpers/routes';

const MainLayout = (props) => (
  <Container>
    <Logo />
    { props.goBackButton }
    { props.children }
    <Footer />
  </Container>
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
      <Button className='right floated'>
        <Link to={contactPath}>Contact</Link>
      </Button>
    </Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    Powered by React Course.
  </Segment>
);
