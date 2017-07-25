import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import { grey400 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

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

const SalesRepBuyerDailyListItem = ({ salesRepId, buyerId, ce, gp, cost, costFpl, onTouchTap }) => (
  <div>
    <ListItem
      onTouchTap={onTouchTap}
      rightIconButton={rightIconMenu}
      primaryText={<div style={style.primaryText}>{`Sales Rep Id: ${salesRepId}, Buyer Id: ${buyerId}`}</div>}
      secondaryTextLines={2}
      secondaryText={`CE: ${ce}, GP: ${gp}, Cost: ${cost}, Cost Fpl: ${costFpl}`}
    />
    <Divider inset />
  </div>
);

SalesRepBuyerDailyListItem.propTypes = {
  salesRepId: PropTypes.number,
  buyerId: PropTypes.number,
  ce: PropTypes.number,
  gp: PropTypes.number,
  cost: PropTypes.number,
  costFpl: PropTypes.number,
  onTouchTap: PropTypes.func,
};

export default SalesRepBuyerDailyListItem;
