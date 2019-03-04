import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import styles from './style'; 
import { createStackNavigator } from 'react-navigation'

class Search extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      city: 'Paris',
    }
  }
  
  setCity (city){
    this.setState({city})
  }

  handleSubmit () {
    this.props.Navigation.navigate('result', {city: this.state.city})
  }

  render() {
    return(
      <View style={styles.container}>
       <TextInput
        style={styles.inputs}
        value={this.state.city}
        onChangeText={(text) => this.setCity(text)}
      />  
      <Button onPress={() => this.Handlesubmit} color={styles.button.color} title="Research city"/>
      </View>
    );
  }
}

export default SearchStack = createStackNavigator({
  screen: Search,
  screen: Search,
});