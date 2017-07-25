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

const ProductMonthlyListItem = ({ productName, productPkg, ce, gp, rev, cost, onTouchTap, premise }) => (
  <div>
    <ListItem
      onTouchTap={onTouchTap}
      leftAvatar={<Avatar>{productName.substring(0, 2)}</Avatar>}
      rightIconButton={rightIconMenu}
      primaryText={<div style={style.primaryText}>{productName}</div>}
      secondaryTextLines={2}
      secondaryText={`Size: ${productPkg}, Premise: ${premise}, CE: ${ce}, GP: ${gp}, Rev: ${rev}, Cost: ${cost}`}
    />
    <Divider inset />
  </div>
);

ProductMonthlyListItem.propTypes = {
  productName: PropTypes.string,
  productPkg: PropTypes.string,
  ce: PropTypes.number,
  gp: PropTypes.number,
  rev: PropTypes.number,
  cost: PropTypes.number,
  premise: PropTypes.string,
  onTouchTap: PropTypes.func,
};

export default ProductMonthlyListItem;
