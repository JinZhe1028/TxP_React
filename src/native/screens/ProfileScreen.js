import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { Button, FormLabel, FormInput, Text, PricingCard } from 'react-native-elements'
import NavBarIcon from '../components/NavBarIcon';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    tabBar: {
      label: 'Profile',
      icon: () => (<NavBarIcon name="account-circle" />),
    },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <PricingCard
          color='#4f9deb'
          title="John Rain"
          price='$999'
          info={['10 sales', 'GP dollards 1099$', 'Goal comp 78%', 'PPL $1.8']}
          button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
        />
      </View>
    );
  }
}
