import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Group from 'material-ui/svg-icons/social/group';
import Person from 'material-ui/svg-icons/social/person';
import Import from 'material-ui/svg-icons/action/input';
import RaisedButton from 'material-ui/RaisedButton';
import { underscore, humanize, pluralize, titleize } from 'inflection';
import { compose, toPairs } from 'ramda';

const headerStyle = {
  padding: '20px 20px 0 20px',
};

const nameContainerStyle = {
  maxWidth: '70%', display: 'inline-block',
};

const overlayStyle = {
  zIndex: 1501,
};

const containerStyle = {
  zIndex: 1502,
};

const menuStyle = {
  padding: '40px 0px 0px 10px',
};

const navigationLinks = {
  activityFeed: ['admin'],
  product: ['admin', 'manager', 'teamLead', 'salesRep'],
  productMonthly: ['admin', 'manager'],
  buyer: ['admin', 'manager'],
  group: ['admin', 'manager', 'teamLead'],
  groupMonthly: ['admin', 'manager', 'teamLead'],
  salesRep: ['admin', 'manager', 'teamLead', 'salesRep'],
  salesRepDaily: ['admin', 'manager', 'teamLead'],
  salesRepBuyerDaily: ['admin', 'manager', 'teamLead', 'salesRep'],
  salesRepMonthly: ['admin', 'manager', 'teamLead', 'salesRep'],
  salesRepProductDaily: ['admin', 'manager', 'teamLead', 'salesRep'],
  user: ['admin', 'manager', 'teamLead'],
  wholesaler: ['admin'],
  import: ['admin', 'manager'],
};

const roleStyle = {
  float: 'right',
};

const floatingButtonStyle = {
  position: 'relative',
  width: '100%',
};

const filterItemsByRole = (role) => (item) => item[1].includes(role);

const linksToItem = (item) => ({
  path: `/app/${pluralize(item[0])}`,
  itemText: <span>{compose(titleize, underscore)(item[0])}</span>,
});

const SidePanel = ({ user, signOut, drawerOpen, push, toggleDrawer }) => {
  const { name, role } = user;

  return (
    <div>
      <Drawer
        docked={false}
        overlayStyle={overlayStyle}
        containerStyle={containerStyle}
        open={drawerOpen}
        onRequestChange={toggleDrawer}
      >
        <div style={headerStyle}>
          <div style={nameContainerStyle}>
            <span>{name}</span>
          </div>
          <span style={roleStyle}>{role}</span>
        </div>
        <div style={menuStyle}>
          {toPairs(navigationLinks).filter(filterItemsByRole(role)).map(linksToItem).map(({ path, itemText }) => (
            <MenuItem
              key={path} primaryText={itemText} onTouchTap={() => {
                push(path);
              }}
            />
          ))}
        </div>

        <div style={floatingButtonStyle}>
          <RaisedButton label="Logout" fullWidth onTouchTap={signOut} primary />
        </div>
      </Drawer>
    </div>
  );
};

SidePanel.propTypes = {
  drawerOpen: PropTypes.bool,
  push: PropTypes.func,
  toggleDrawer: PropTypes.func,
  user: PropTypes.object,
  signOut: PropTypes.func,
};

export default SidePanel;
