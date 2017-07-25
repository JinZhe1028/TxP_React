import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import Up from 'material-ui/svg-icons/action/trending-up';
import Down from 'material-ui/svg-icons/action/trending-down';

import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

const arrowStyle = {
  position: 'absolute',
  right: 30,
  top: 5,
};

const SalesRepDailyListItem = ({ onTouchTap, ...payload }) => {
  const { rank, previousrank } = payload;
  const rankDifference = previousrank - rank;
  return (
    <div>
      <ListItem
        onTouchTap={onTouchTap}
        leftAvatar={<Avatar>{(payload.name).substring(0, 2)}</Avatar>}
        primaryText={
          <span>
            <span>{payload.name}</span>
            <span style={arrowStyle}>
              {rankDifference >= 0
                ? <Up color={'green'} />
                : <Down color={'red'} />
              }
              <span>
                {` ${rankDifference}`}
              </span>
            </span>
          </span>}
        secondaryTextLines={2}
        secondaryText={`GP: ${payload.gp}, CE: ${payload.ce}, Cost: ${payload.cost}, Cost Fpl: ${payload.costFpl}`}
      />
      <Divider inset />
    </div>
  );
};

SalesRepDailyListItem.propTypes = {
  name: PropTypes.string,
  onTouchTap: PropTypes.func,
};

export default SalesRepDailyListItem;
