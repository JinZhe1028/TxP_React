import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import VxPimage from '../assets/images/VxP.png';

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Image source={VxPimage} />
        <FormLabel>Email</FormLabel>
        <FormInput />
        <FormLabel>Password</FormLabel>
        <FormInput />
        <Button
          onPress={() => navigate('Internal')}
          title="Login"
        />
      </View>
    );
  }
}
