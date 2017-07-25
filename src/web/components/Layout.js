import React, { PropTypes } from 'react';
import FilterIcon from 'material-ui/svg-icons/content/filter-list';
import SortIcon from 'material-ui/svg-icons/content/sort';
import Bar from './Bar';
import Navigation from './Navigation';
import SidePanel from './SidePanel';
import IconButton from 'material-ui/IconButton';
import AppNotification from './AppNotification'

const getButton = (component) => <IconButton>{component}</IconButton>;

const Layout = ({
  title, push, location, children, user, toggleDrawer, drawerOpen, filterFormComponent, toggleFiltersForm,
  sortFormComponent, toggleSortForm, signOut, message, updateMessage,
}) => (
  <div>
    <Bar
      title={title} toggleDrawer={toggleDrawer} action={
        <div>
          {filterFormComponent && filterFormComponent.condition(user) && getButton(
            <FilterIcon color={'white'} onTouchTap={toggleFiltersForm} />
          )}
          {sortFormComponent && sortFormComponent.condition(user) && getButton(
            <SortIcon color={'white'} onTouchTap={toggleSortForm} />
          )}
        </div>
      }
    />
    <SidePanel drawerOpen={drawerOpen} push={push} toggleDrawer={toggleDrawer} user={user} signOut={signOut} />

    { children }
    <AppNotification message={message} updateMessage={updateMessage} />
    <Navigation pathname={location.pathname} push={push} user={user} />
  </div>
);

Layout.propTypes = {
  title: PropTypes.string,
  location: PropTypes.object,
  push: PropTypes.func,
  children: PropTypes.node,
  user: PropTypes.object,
  toggleDrawer: PropTypes.func,
  drawerOpen: PropTypes.bool,
  filterFormComponent: PropTypes.object,
  toggleFiltersForm: PropTypes.func,
  sortFormComponent: PropTypes.object,
  toggleSortForm: PropTypes.func,
  signOut: PropTypes.func,
  message: PropTypes.string,
  updateMessage: PropTypes.func,
};

export default Layout;
