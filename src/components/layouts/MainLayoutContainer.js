import React, { PropTypes } from 'react';

import { Button } from 'semantic-ui-react';

import MainLayout from 'components/layouts/MainLayout';

import history from 'helpers/history';

const MainLayoutContainer = (props) => (
  <MainLayout children={props.children} goBackButton={props.location.pathname != '/' && <GoBackButton />} />
);

MainLayoutContainer.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object
};

export default MainLayoutContainer;

const GoBackButton = () => (
  <Button onClick={() => history.goBack()}>Назад</Button>
);
