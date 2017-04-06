import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import { Button } from 'semantic-ui-react';

import MainLayout from 'components/layouts/MainLayout';

import history from 'helpers/history';

const MainLayoutContainer = (props) => (
  <div>
    <Helmet>
      <meta name="description" content="React Blog Platform" />
      <link rel="canonical" href="http://my-react-site.com" />
    </Helmet>
    <MainLayout children={props.children} goBackButton={props.location.pathname != '/' && <GoBackButton />} />
  </div>
);

MainLayoutContainer.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object
};

export default MainLayoutContainer;

const GoBackButton = () => (
  <Button onClick={() => history.goBack()}>Назад</Button>
);
