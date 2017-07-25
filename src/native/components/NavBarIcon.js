import React, { PropTypes } from 'react';
import { Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const NavBarIcon = ({ name }) => (
  <Icon containerStyle={styles.icon} color={'#5e6977'} name={name} size={33} />
);

NavBarIcon.propTypes = {
  name: PropTypes.string,
};

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
});

export default NavBarIcon;
