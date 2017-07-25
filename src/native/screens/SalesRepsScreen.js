import React, { Component } from 'react';
import { TextInput, View, ScrollView } from 'react-native';
import { Button, FormLabel, FormInput, Text, List, ListItem, Icon, SearchBar, ButtonGroup } from 'react-native-elements'
import userIcon from '../assets/images/userIcon.jpg';
import NavBarIcon from '../components/NavBarIcon';

const list = [
  {
    name: 'Amy Farha',
    rate: 487,
  },
  {
    name: 'Chris Jackson',
    rate: 378,
  },
  {
    name: 'Jon Doe',
    rate: 350,
  },
  {
    name: 'Jack Bim',
    rate: 301,
  },
  {
    name: 'Mike Read',
    rate: 259,
  },
  {
    name: 'Amy Farha',
    rate: 487,
  },
  {
    name: 'Chris Jackson',
    rate: 378,
  },
  {
    name: 'Jon Doe',
    rate: 350,
  },
  {
    name: 'Jack Bim',
    rate: 301,
  },
  {
    name: 'Mike Read',
    rate: 259,
  },
];

export default class SalesRepsScreen extends React.Component {
  static navigationOptions = {
    title: 'Sales Reps',
    tabBar: {
      label: 'Sales Reps',
      icon: () => (<NavBarIcon name="group" />),
    },
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView>
        <SearchBar lightTheme placeholder="Search..." />
        <List>
          {
            list.map((l, i) => (
              <ListItem
                roundAvatar
                avatar={userIcon}
                key={i}
                title={l.name}
                subtitle={`position: ${i}`}
                badge={{ value: l.rate, badgeContainerStyle: { marginTop: 5 } }}
                onPress={() => navigate('Profile')}
              />
            ))
          }
        </List>
      </ScrollView>
    );
  }
}
