import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '~/src/common/store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import Router from './router';

const history = createHistory();

const store = configureStore({}, { router: routerReducer }, [routerMiddleware(history)]);

export default function () {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          {Router}
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}
