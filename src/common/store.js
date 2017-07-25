/**
 * Create the store with asynchronously loaded reducers
 */

import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import createLogger from 'redux-logger';
import rootSaga from './sagas';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools as localDevTools } from 'redux-devtools-extension';
import { composeWithDevTools as remoteDevTools } from 'remote-redux-devtools';
import persistState from 'redux-localstorage';

const isRemote = false;
const composeWithDevTools = isRemote ? remoteDevTools : localDevTools;
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const configureStore = (initialState = {}, extraReducers = {}, extraMiddlewares = []) => {
  const store = createStore(
    createReducer(extraReducers),
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger, ...extraMiddlewares), persistState('app'))
  );

  sagaMiddleware.run(rootSaga); // store.runSaga = sagaMiddleware.run;

  return store;
};

export default configureStore;
