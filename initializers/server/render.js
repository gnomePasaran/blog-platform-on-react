import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';

import Helmet from 'react-helmet';

import { compact } from 'lodash/array';

import webpackAsset from './webpackAsset';

import createStore from 'store';
import routes from 'routes';

import prepareData from 'helpers/prepareData';

const store = createStore();

export default (req, res) => {
  match({routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) return res.sendStatus(500);

    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
      return;
    }

    if (renderProps === undefined) return res.sendStatus(404);

    Promise.all(compact(prepareData(store, renderProps))).then(() => {
      const initialState = JSON.stringify(store.getState());

      const content = ReactDOMServer.renderToString(
        React.createElement(
          Provider,
          { store },
          React.createElement(RouterContext, renderProps)
        )
      );

      const head = Helmet.rewind();

      res.status(200);
      res.render(
        'index',
        { initialState, content, head, webpackAsset }
      );
    }, (error) => {
      if (error) {
        res.sendStatus(500);
      } else {
        res.sendStatus(404);
      }
    });
  });
};
