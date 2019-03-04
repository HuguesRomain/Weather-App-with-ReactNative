import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import About from './components/About';
import Search from './components/Search';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
import styles from "./components/style"


const Navigation = createBottomTabNavigator({
  About: {
    screen: About
  },
  Search: {
    screen: Search
  },
 
},{
  tabBarOptions: {
  activeBackgroundColor: "#F16E00",
     style: {
    backgroundColor: 'rgba(189, 195, 199, 1)',
     },
     labelStyle: {
      fontSize: 20,
    },
  },
  
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
