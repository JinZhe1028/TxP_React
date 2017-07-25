import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import { grey400 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';

const style = {
  primaryText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

const iconButtonElement = (
  <IconButton
    touch
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

const UserListItem = ({ name, email, role, onTouchTap }) => (
  <div>
    <ListItem
      onTouchTap={onTouchTap}
      leftAvatar={<Avatar>{(name || email).substr(0, 2)}</Avatar>}
      rightIconButton={rightIconMenu}
      primaryText={<div style={style.primaryText}>{name}</div>}
      secondaryText={`Email: ${email}, Role: ${role}`}
      secondaryTextLines={2}
    />
    <Divider inset />
  </div>
);

UserListItem.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
  onTouchTap: PropTypes.func,
};

export default UserListItem;
