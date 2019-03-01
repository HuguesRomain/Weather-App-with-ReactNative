import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import About from './components/About';
import Search from './components/Search';
import { createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

const Navigation = createBottomTabNavigator({
  About: {
    screen: About
  },
  Search: {
    screen: Search
  }
})

const Nav = createAppContainer(Navigation)

export default class App extends React.Component {
  render() {
    return ( 
      <View style={{flex: 1}}>
      <StatusBar hidden={true}/>
      <Nav />
      </View>
    );
  }
}
