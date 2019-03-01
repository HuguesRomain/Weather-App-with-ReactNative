import * as React from 'react';
import { Text, View, Fragment, StyleSheet, Image, ActivityIndicator, Button } from 'react-native';
 
 export default class About extends React.Component {

  search () {
   this.props.navigation.navigate('Search');
  }

   render(){
     return(
       <View style={style.view}> 
       <Text style={style.title}>About me</Text>
       <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
      <Button onPress={() => this.search()} title="Research city"/>
       </View>
     );
   }
 }

const style = StyleSheet.create({
  view: {
    margin: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  }
})