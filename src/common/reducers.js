/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux';
import { merge } from 'ramda';
import { reducer as form } from 'redux-form';
import { crudReducer as models } from 'redux-crud-store';
import { capitalize } from 'inflection';
import app from './redux/App';
import loginScreen from './redux/LoginScreen';
import importsScreen from './redux/ImportsScreen';
import UserScreen from '~/src/web/screens/UserScreen';
import ProductScreen from '~/src/web/screens/ProductScreen';
import ProductMonthlyScreen from '~/src/web/screens/ProductMonthlyScreen';
import SalesRepScreen from '~/src/web/screens/SalesRepScreen';
import ActivityFeedScreen from '~/src/web/screens/ActivityFeedScreen';
import BuyerScreen from '~/src/web/screens/BuyerScreen';
import GroupScreen from '~/src/web/screens/GroupScreen';
import SalesRepBuyerDailyScreen from '~/src/web/screens/SalesRepBuyerDailyScreen';
import SalesRepDailyScreen from '~/src/web/screens/SalesRepDailyScreen';
import SalesRepMonthlyScreen from '~/src/web/screens/SalesRepMonthlyScreen';
import SalesRepProductDailyScreen from '~/src/web/screens/SalesRepProductDailyScreen';
import WholesalerScreen from '~/src/web/screens/WholesalerScreen';
import GroupMonthlyScreen from '~/src/web/screens/GroupMonthlyScreen';

import GroupMonthlyNavScreen from '~/src/web/screens/GroupMonthlyNavScreen';
import SalesRepDailyNavScreen from '~/src/web/screens/SalesRepDailyNavScreen';
import ProductMonthlyNavScreen from '~/src/web/screens/ProductMonthlyNavScreen';

const makeReducerKey = (name, key) => `${name}${capitalize(key === 'list' ? '' : key)}`;

const extractPageReducers = (page, name) =>
  Object.keys(page).reduce((acc, key) =>
    merge(acc, { [makeReducerKey(name, key)]: page[key].reducer }),
  {});

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
const createReducer = (extra = {}) => combineReducers(merge({
  models,
  app,
  form,
  loginScreen,
  importsScreen,
  ...extractPageReducers(SalesRepScreen, 'salesRepScreen'),
  ...extractPageReducers(UserScreen, 'userScreen'),
  ...extractPageReducers(ProductScreen, 'productScreen'),
  ...extractPageReducers(ProductMonthlyScreen, 'productMonthlyScreen'),
  ...extractPageReducers(ActivityFeedScreen, 'activityFeedScreen'),
  ...extractPageReducers(BuyerScreen, 'buyerScreen'),
  ...extractPageReducers(GroupScreen, 'groupScreen'),
  ...extractPageReducers(SalesRepBuyerDailyScreen, 'salesRepBuyerDailyScreen'),
  ...extractPageReducers(SalesRepDailyScreen, 'salesRepDailyScreen'),
  ...extractPageReducers(SalesRepMonthlyScreen, 'salesRepMonthlyScreen'),
  ...extractPageReducers(SalesRepProductDailyScreen, 'salesRepProductDailyScreen'),
  ...extractPageReducers(WholesalerScreen, 'wholesalerScreen'),
  ...extractPageReducers(GroupMonthlyScreen, 'groupMonthlyScreen'),

  ...extractPageReducers(ProductMonthlyNavScreen, 'productMonthlyNavScreen'),
  ...extractPageReducers(SalesRepDailyNavScreen, 'salesRepDailyNavScreen'),
  ...extractPageReducers(GroupMonthlyNavScreen, 'groupMonthlyNavScreen'),
}, extra));

export default createReducer;
