import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import styles from './style'; 

export default class Home extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      city: 'Paris',
    }
  }
  
  setCity (city){
    this.setState({city})
  }

  render() {
    return(
      <View style={styles.container}>
       <TextInput
        style={styles.inputs}
        value={this.state.city}
        onChangeText={(text) => this.setCity(text)}
      />  
      <Button onPress={() => this.submit} color={styles.button.color} title="Research city"/>
      </View>
    );
  }
}