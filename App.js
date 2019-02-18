import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import About from './components/About';
import Home from './components/Search';

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginHorizontal: 40, marginVertical: 40}}>
      <Home/>
      </View>
    );
  }
}
  