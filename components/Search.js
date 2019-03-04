import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import styles from './style'; 
import { createStackNavigator } from 'react-navigation'
import List from './List'

class Search extends React.Component{
  
  static navigationOptions = {
    title: "Search a city", 
  }


  constructor (props){
    super(props)
    this.state = {
      city: '',
    }
  }
  
  setCity (city){
    this.setState({city})
  }

  handleSubmit () {
    this.props.navigation.navigate('Result', {city: this.state.city});
  }

  render() {
    return(
      <View style={styles.container}>
       <TextInput
       placeholder={"Paris"}
        style={styles.inputs}
        value={this.state.city}
        onChangeText={(text) => this.setCity(text)}
      />  
      <Button color={styles.button.color} onPress={() => this.handleSubmit()}  title="Research city"/>
      </View>
    );
  }
}

const navigationOptions = {
  headerStyle: styles.header,
  headerTitleStyle: styles.headerTitle,
}

export default SearchStack = createStackNavigator({
Result: {
  screen: List,
  navigationOptions,
},  
Search: {
  screen: Search,
  navigationOptions,
},
});