import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';

const userIsAuthenticated = () => UserAuthWrapper({
  authSelector: (state) => state.app.user,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
});

export default userIsAuthenticated;
