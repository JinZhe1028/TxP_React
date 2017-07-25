import React, { PropTypes } from 'react';
import { Provider, connect } from 'react-redux';
import Router from './router';
import configureStore from '../common/store';
import { addNavigationHelpers } from 'react-navigation';

const store = configureStore({}, {
  nav: (state, action) => (
    Router.router.getStateForAction(action, state)
  ),
});

const AppWithRouter = ({ dispatch, nav }) => (
  <Router navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithRouter.propTypes = {
  dispatch: PropTypes.func,
  nav: PropTypes.object,
};

const AppWithRouterConnected = connect((state) => ({ nav: state.nav }))(AppWithRouter);

const App = () => (
  <Provider store={store}>
    <AppWithRouterConnected />
  </Provider>
);

export default App;
