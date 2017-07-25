import React, { Component } from 'react';
import { TextInput, View, ScrollView } from 'react-native';
import { Button, FormLabel, FormInput, Text, SearchBar, ListItem, List } from 'react-native-elements'
import NavBarIcon from '../components/NavBarIcon';
import { times, identity, map } from 'ramda';

const colors = ['#f2f2f2', '#dafeda', '#6dfb6d', '#ffbcb7'];
const trendColors = ['red', 'green', 'yellow'];
const products = ['BUD LIGHT', 'TECATE', 'SHOCK TOP', 'FIRESTONE', 'DOS EQUIS', 'BEST DAMN', 'TIOGA SEQUOIA', 'ICELANDIC'];
const sizes = ['30/12oz can', '20/12oz glass', '2/12/12oz can', '4/6/16oz can', '12/32oz glass', '6/4/16oz can'];
const volums = ['High', 'Medium', 'Low'];
const gpRanks = [
  { name: 'Low', val: 'LT $3.80/CE' },
  { name: 'Medium', val: '$3.80-$5.20/CE' },
  { name: 'High', val: '$5.20-$6.30/CE' },
  { name: 'Very High', val: '$6.30-$8.00/CE' },
  { name: 'Super High', val: '$8.00+/CE' },
];

const getRand = (arr) => arr[Math.floor(Math.random() * arr.length)];

const list = map(() => ({
  name: getRand(products),
  backgroundColor: getRand(colors),
  // fontColor: 'r',
  trendColor: getRand(trendColors),
  size: getRand(sizes),
  gpRank: getRand(gpRanks),
  volRank: getRand(volums),
}))(times(identity, 10));

const productItem = ({ name, color, size, gpRank, volRank }) => (<View> 1212 asd</View>);

export default class ProductDailiesScreen extends React.Component {
  static navigationOptions = {
    title: 'Products',
    tabBar: {
      label: 'Products',
      icon: () => (<NavBarIcon name="assessment" />),
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
                containerStyle={{ backgroundColor: l.backgroundColor }}
                titleStyle={{ color: l.fontColor }}
                subtitleStyle={{ color: l.fontColor }}
                key={i}
                title={`${l.name} ${l.size}`}
                subtitle={`Vol Rank ${l.volRank}`}
                badge={{ value: l.gpRank.val, badgeContainerStyle: { marginTop: 5, backgroundColor: l.trendColor } }}
              />
            ))
          }
        </List>
      </ScrollView>
    );
  }
}
