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

const SalesRepProductDailyListItem = ({ salesRepId, productId, onTouchTap, premise, ce, gp }) => (
  <div>
    <ListItem
      onTouchTap={onTouchTap}
      leftAvatar={<Avatar>{(salesRepId)}</Avatar>}
      rightIconButton={rightIconMenu}
      primaryText={<div style={style.primaryText}>{`Sales Rep Id: ${salesRepId}, Product Id: ${productId}`}</div>}
      secondaryTextLines={2}
      secondaryText={`Premise: ${premise}, CE: ${ce}, GP: ${gp}`}
    />
    <Divider inset />
  </div>
);

SalesRepProductDailyListItem.propTypes = {
  salesRepId: PropTypes.number,
  productId: PropTypes.number,
  premise: PropTypes.string,
  ce: PropTypes.number,
  gp: PropTypes.number,
  onTouchTap: PropTypes.func,
};

export default SalesRepProductDailyListItem;
