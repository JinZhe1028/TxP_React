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

const SalesRepMonthlyListItem = ({ salesRepId, onTouchTap, gpGoal, gpGenerated, ceGoal, ceSold, fplTarget, cpcFpl, routeId }) => (
  <div>
    <ListItem
      onTouchTap={onTouchTap}
      leftAvatar={<Avatar>{(salesRepId)}</Avatar>}
      rightIconButton={rightIconMenu}
      primaryText={<div style={style.primaryText}>{`Sales Rep Id: ${salesRepId}`}</div>}
      secondaryTextLines={2}
      secondaryText={`GP Goal: ${gpGoal}, GP Generated: ${gpGenerated}, CE Goal: ${ceGoal}, CE Sold: ${ceSold},
        Fpl Target: ${fplTarget}, Cpc Fpl: ${cpcFpl}, Route: ${routeId}`}
    />
    <Divider inset />
  </div>
);

SalesRepMonthlyListItem.propTypes = {
  salesRepId: PropTypes.number,
  routeId: PropTypes.string,
  gpGoal: PropTypes.number,
  gpGenerated: PropTypes.number,
  ceGoal: PropTypes.number,
  ceSold: PropTypes.number,
  fplTarget: PropTypes.number,
  cpcFpl: PropTypes.number,
  onTouchTap: PropTypes.func,
};

export default SalesRepMonthlyListItem;
