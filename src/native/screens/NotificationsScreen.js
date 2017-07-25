import React, { Component } from 'react';
import { TextInput, View, ScrollView } from 'react-native';
import { Button, FormLabel, FormInput, Text, SearchBar } from 'react-native-elements'
import NavBarIcon from '../components/NavBarIcon';

export default class NotificationsScreen extends React.Component {
  static navigationOptions = {
    title: 'Notifications',
    tabBar: {
      label: 'Notifications',
      icon: () => (<NavBarIcon name="notifications" />),
    },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <SearchBar lightTheme placeholder="Search..." />
      </ScrollView>
    );
  }
}
