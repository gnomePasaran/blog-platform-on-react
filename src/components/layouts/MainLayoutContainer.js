import React from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';

import { Button, Grid } from 'semantic-ui-react';

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
  <Grid>
    <Grid.Column>
      <Button
        basic
        onClick={() => history.goBack()}
        color='grey'
        content='Back'
        icon='left arrow'
        labelPosition='left'
        size='small'
      />
    </Grid.Column>
  </Grid>
);
