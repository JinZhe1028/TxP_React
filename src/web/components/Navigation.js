import React, { PropTypes } from 'react';
import { findIndex, propEq, contains } from 'ramda';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import ShoppingBasket from 'material-ui/svg-icons/action/shopping-basket';
import Statistics from 'material-ui/svg-icons/social/poll';
import Group from 'material-ui/svg-icons/social/group';
import InsertDriveFile from 'material-ui/svg-icons/editor/insert-drive-file';

const style = {
  position: 'fixed',
  backgroundColor: 'rgb(245, 245, 245)',
  bottom: 0,
  zIndex: 1,
};

const navigationLinks = [
  {
    path: '/app/nav/salesRepDailies',
    label: 'Sales Rep',
    condition: () => true,
    icon: <Group hoverColor={'white'} />,
  },
  {
    path: '/app/nav/groupMonthlies',
    label: 'Group',
    condition: () => true,
    icon: <Statistics hoverColor={'white'} />,
  },
  {
    path: '/app/nav/productMonthlies',
    label: 'RoadMap',
    condition: () => true,
    icon: <ShoppingBasket hoverColor={'white'} />,
  },
  {
    path: '/app/nav/imports',
    label: 'Imports',
    condition: (user) => contains(user.role, ['admin', 'manager']),
    icon: <InsertDriveFile hoverColor={'white'} />,
  },
];

const Navigation = ({ pathname, push, user }) => {
  const currentIndex = findIndex(propEq('path', pathname))(navigationLinks);

  return (
    <BottomNavigation selectedIndex={currentIndex} style={style}>
      {
        navigationLinks.filter(({ condition }) => condition(user)).map(({ label, path, icon }) => (
          <BottomNavigationItem key={path} label={label} icon={icon} onTouchTap={() => push(path)} />
        ))
      }
    </BottomNavigation>
  );
};

Navigation.propTypes = {
  pathname: PropTypes.string,
  push: PropTypes.func,
  user: PropTypes.object,
};

export default Navigation;
