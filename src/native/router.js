import { TabNavigator, StackNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import ProductsScreen from './screens/ProductsScreen';
import UsersScreen from './screens/UsersScreen';
import ProductDailiesScreen from './screens/ProductDailiesScreen';
import SalesRepsScreen from './screens/SalesRepsScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';

const InternalScreenNavigator = TabNavigator({
  // Products: { screen: ProductsScreen },
  // Users: { screen: UsersScreen },
  SalesReps: { screen: SalesRepsScreen },
  ProductDailies: { screen: ProductDailiesScreen },
  Notifications: { screen: NotificationsScreen },
  Profile: { screen: ProfileScreen },
}, {
  tabBarOptions: {
    activeTintColor: 'blue',
  },
  animationEnabled: true,
  initialTab: 'SalesReps',
});

export default StackNavigator({
  Login: { screen: LoginScreen },
  Internal: { screen: InternalScreenNavigator },
});
