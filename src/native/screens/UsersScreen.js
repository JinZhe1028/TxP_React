import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { Button, FormLabel, FormInput, Text } from 'react-native-elements'

export default class UsersScreen extends React.Component {
  static navigationOptions = {
    title: 'Products',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      </View>
    );
  }
}
