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

const GroupMonthlyListItem = ({
  teamLeadName, teamLeadEmail, fplTarget, fplPayoutAchieved, onTouchTap, cpcFpl
}) => (
  <div>
    <ListItem
      onTouchTap={onTouchTap}
      leftAvatar={<Avatar>{(teamLeadName || teamLeadEmail).substring(0, 2)}</Avatar>}
      rightIconButton={rightIconMenu}
      primaryText={<div style={style.primaryText}>{`${teamLeadName}`}</div>}
      secondaryText={
        `Target: ${fplTarget}, Achieved: ${fplPayoutAchieved}, Cpc Fpl: ${cpcFpl}`
      }
      secondaryTextLines={2}
    />
    <Divider inset />
  </div>
);

GroupMonthlyListItem.propTypes = {
  teamLeadName: PropTypes.string,
  teamLeadId: PropTypes.number,
  teamLeadEmail: PropTypes.string,
  fplTarget: PropTypes.number,
  cpcFpl: PropTypes.number,
  fplPayoutAchieved: PropTypes.number,
  onTouchTap: PropTypes.func,
};

export default GroupMonthlyListItem;
