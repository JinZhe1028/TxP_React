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

const WholesalerListItem = ({ name, gpaId, onTouchTap }) => (
  <div>
    <ListItem
      onTouchTap={onTouchTap}
      leftAvatar={<Avatar>{(name).substring(0, 2)}</Avatar>}
      rightIconButton={rightIconMenu}
      primaryText={<div style={style.primaryText}>{name}</div>}
      secondaryTextLines={2}
      secondaryText={`Gpa Id: ${gpaId}`}
    />
    <Divider inset />
  </div>
);

WholesalerListItem.propTypes = {
  name: PropTypes.string,
  gpaId: PropTypes.string,
  onTouchTap: PropTypes.func,
};

export default WholesalerListItem;
