import * as React from 'react';
import { Text, View, Fragment, StyleSheet, Image, ActivityIndicator } from 'react-native';
 
 export default class About extends React.Component {
   render(){
     return(
       <View style={style.view}> 
       <Text style={style.title}> A propos de moi</Text>
       <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
      {/*  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
       <ActivityIndicator style={style.view} color="#FF0000" size="small" animating={true}/>
       <ActivityIndicator style={style.view} color="#FF0000" size="small" animating={true}/>
       </View> */}
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