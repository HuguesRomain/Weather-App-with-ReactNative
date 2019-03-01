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
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={this.state.city}
        onChangeText={(text) => this.setCity(text)}
      />  
      <Button onPress={() => this.submit} title="Research city"/>
      </View>
    );
  }
}