import React, { PropTypes } from 'react';
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '5px 16px',
  },
  title: {
    textAlign: 'center',
    display: 'block',
    width: '100%',
    padding: '5px',
  },
};

const FilterBar = ({ filters }) => (
  <div style={styles.wrapper}>
    { Object.values(filters).length > 0 && <div style={styles.title}> Filter: </div> }
    {
      Object.values(filters).map((filter) => (<Chip key={filter}>{filter}</Chip>))
    }
  </div>
);

FilterBar.propTypes = {
  filters: PropTypes.object,
};

export default FilterBar;
