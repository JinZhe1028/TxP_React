import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

const style = {
  position: 'fixed',
  // paddingRight: '16px',
  // paddingLeft: '16px',
};

const Bar = ({ action, title, toggleDrawer }) => (
  <AppBar
    onLeftIconButtonTouchTap={toggleDrawer}
    title={title}
    iconElementRight={action}
    style={style}
  />
);

Bar.propTypes = {
  action: PropTypes.node,
  title: PropTypes.string,
  toggleDrawer: PropTypes.func,
};

export default Bar;
