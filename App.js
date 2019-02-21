import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import About from './components/About';
import Search from './components/Search';
import { TabNavigator } from './node_modules/react-navigation';

const Tabs = TabNavigator({
  Search: { screen: Search }, 
  About: { screen: About } 
}); 

export default class App extends React.Component {
  render() {
    return ( 
      <Tabs />
    );
  }
}
  