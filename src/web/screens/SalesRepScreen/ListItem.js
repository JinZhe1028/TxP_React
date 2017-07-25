import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

const style = {
  primaryText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

const SalesRepListItem = ({ teamLeadName, id, userName, onTouchTap }) => (
  <div>
    <ListItem
      onTouchTap={onTouchTap}
      leftAvatar={<Avatar>{id}</Avatar>}
      primaryText={<div style={style.primaryText}>{`Name: ${userName}`}</div>}
      secondaryText={`Team Lead: ${teamLeadName}`}
      secondaryTextLines={1}
    />
    <Divider inset />
  </div>
);

SalesRepListItem.propTypes = {
  id: PropTypes.number,
  teamLeadName: PropTypes.string,
  userName: PropTypes.string,
  onTouchTap: PropTypes.func,
};

export default SalesRepListItem;
