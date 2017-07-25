import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import { titleize } from 'inflection';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

const style = {
  primaryText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

const titleColor = (color) => ({ backgroundColor: color })

const ProductMonthlyListItem = ({
  onTouchTap, productName, volCategory, gpCategory, color, trend, score, productPackage, premise,
}) => (
  <div>
    <ListItem
      style={titleColor(color)}
      onTouchTap={onTouchTap}
      leftAvatar={<Avatar>{productName.substring(0, 2)}</Avatar>}
      primaryText={<div style={style.primaryText}>{productName}</div>}
      secondaryTextLines={2}
      secondaryText={
        `Size: ${productPackage}, Premise: ${premise}, Volume: ${volCategory}, GP: ${gpCategory}, Trend: ${trend}`
      }
    />
    <Divider inset />
  </div>
);

ProductMonthlyListItem.propTypes = {
  productName: PropTypes.string,
  volCategory: PropTypes.string,
  gpCategory: PropTypes.string,
  color: PropTypes.string,
  trend: PropTypes.string,
  score: PropTypes.number,
  productPackage: PropTypes.string,
  premise: PropTypes.string,
  onTouchTap: PropTypes.func,
};

export default ProductMonthlyListItem;
