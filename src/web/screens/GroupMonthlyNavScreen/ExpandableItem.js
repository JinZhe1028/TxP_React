import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

const style = {
  primaryText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  ownStyle: {
    backgroundColor: '#e7e7ff',
  },
};

const GroupMonthlyListItem = ({
  teamLeadName, teamLeadEmail, teamLeadId, fplTarget, fplPayoutAchieved, onTouchTap, cpcFpl, user,
}) =>
  <div style={teamLeadId === user.id ? style.ownStyle : {}}>
    <ListItem
      onTouchTap={() => (teamLeadId === user.id || user.role === 'admin' || user.role === 'manager') && onTouchTap()}
      leftAvatar={<Avatar>{(teamLeadName || teamLeadEmail).substring(0, 2)}</Avatar>}
      primaryText={<div style={style.primaryText}>{`${teamLeadName}`}</div>}
      secondaryText={
        `Target: ${fplTarget}, Achieved: ${fplPayoutAchieved}, Cpc Fpl: ${cpcFpl}`
      }
      secondaryTextLines={2}
    />
    <Divider inset />
  </div>;

GroupMonthlyListItem.propTypes = {
  teamLeadName: PropTypes.string,
  teamLeadEmail: PropTypes.string,
  teamLeadId: PropTypes.number,
  fplTarget: PropTypes.number,
  cpcFpl: PropTypes.number,
  fplPayoutAchieved: PropTypes.number,
  onTouchTap: PropTypes.func,
  user: PropTypes.object,
};

export default GroupMonthlyListItem;
