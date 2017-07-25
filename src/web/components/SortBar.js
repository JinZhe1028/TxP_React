import React, { PropTypes } from 'react';
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '5px 16px 10px',
  },
  title: {
    textAlign: 'center',
    display: 'block',
    width: '100%',
    padding: '5px',
  },
};

const SortBar = ({ sort }) => (
  <div style={styles.wrapper}>
    {sort.length > 0 && <div style={styles.title}> Sort: </div> }
    {
      sort.map((item) => (<Chip key={item}>{item}</Chip>))
    }
  </div>
);

SortBar.propTypes = {
  sort: PropTypes.array,
};

export default SortBar;
