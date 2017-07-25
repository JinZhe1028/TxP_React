import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import LoginScreen from './screens/LoginScreen';
import ImportsScreen from './screens/ImportsScreen';
import UserScreen from './screens/UserScreen';
import ProductScreen from './screens/ProductScreen';
import ProductMonthlyScreen from './screens/ProductMonthlyScreen';
import SalesRepScreen from './screens/SalesRepScreen';
import ActivityFeedScreen from './screens/ActivityFeedScreen';
import BuyerScreen from './screens/BuyerScreen';
import GroupScreen from './screens/GroupScreen';
import SalesRepBuyerDailyScreen from './screens/SalesRepBuyerDailyScreen';
import SalesRepDailyScreen from './screens/SalesRepDailyScreen';
import SalesRepMonthlyScreen from './screens/SalesRepMonthlyScreen';
import SalesRepProductDailyScreen from './screens/SalesRepProductDailyScreen';
import WholesalerScreen from './screens/WholesalerScreen';
import GroupMonthlyScreen from './screens/GroupMonthlyScreen';

import SalesRepDailyNavScreen from './screens/SalesRepDailyNavScreen';
import GroupMonthlyNavScreen from './screens/GroupMonthlyNavScreen';
import ProductMonthlyNavScreen from './screens/ProductMonthlyNavScreen';

// import ProductDailiesScreen from './screens/ProductDailiesScreen';
// import NotificationsScreen from './screens/NotificationsScreen';
// import ProfileScreen from './screens/ProfileScreen';

const extractPageComponent = (page) => page.list.connectedComponent;

export default (
  <Switch>
    <Route path="/login" exact component={LoginScreen} />
    <Route path="/app/users" exact component={extractPageComponent(UserScreen)} />
    <Route path="/app/salesReps" exact component={extractPageComponent(SalesRepScreen)} />
    <Route path="/app/products" exact component={extractPageComponent(ProductScreen)} />
    <Route path="/app/productMonthlies" exact component={extractPageComponent(ProductMonthlyScreen)} />
    <Route path="/app/activityFeeds" exact component={extractPageComponent(ActivityFeedScreen)} />
    <Route path="/app/buyers" exact component={extractPageComponent(BuyerScreen)} />
    <Route path="/app/groups" exact component={extractPageComponent(GroupScreen)} />
    <Route path="/app/salesRepBuyerDailies" exact component={extractPageComponent(SalesRepBuyerDailyScreen)} />
    <Route path="/app/salesRepMonthlies" exact component={extractPageComponent(SalesRepMonthlyScreen)} />
    <Route path="/app/salesRepDailies" exact component={extractPageComponent(SalesRepDailyScreen)} />
    <Route path="/app/salesRepProductDailies" exact component={extractPageComponent(SalesRepProductDailyScreen)} />
    <Route path="/app/wholesalers" exact component={extractPageComponent(WholesalerScreen)} />
    <Route path="/app/imports" exact component={ImportsScreen} />
    <Route path="/app/groupMonthlies" exact component={extractPageComponent(GroupMonthlyScreen)} />

    <Route path="/app/nav/productMonthlies" exact component={extractPageComponent(ProductMonthlyNavScreen)} />
    <Route path="/app/nav/salesRepDailies" exact component={extractPageComponent(SalesRepDailyNavScreen)} />
    <Route path="/app/nav/groupMonthlies" exact component={extractPageComponent(GroupMonthlyNavScreen)} />
    <Route path="/app/nav/imports" exact component={ImportsScreen} />

    <Redirect from="/*" to="/app/nav/salesRepDailies" />

    {
      // <Route path="/app" component={App} />
      // <Route path="/product-dailies" component={ProductDailiesScreen} />
      // <Route path="/notifications" component={NotificationsScreen} />
      // <Route path="/profile" component={ProfileScreen} />
    }
  </Switch>
);
