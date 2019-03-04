import React from 'React'; 
import styles from './style';
import { Text, ActivityIndicator } from 'react-native';

export default class List extends React.Component{

  static navigationOptions = ({navigation}) => {
    return {
     /*  title: `Weather / ${navigation.state.params.city} ` */
    }
  }
  
  constructor (props){
    super(props)
    this.state = {
      city: 'Paris', /* this.props.navigation.state.params.city,  */
      report: null,
    }
  }

  render(){
    if(this.state.report === null){
      return(
      <ActivityIndicator color={styles.color} size="large"/>
      )
    } else {
      return(
        <Text>Hello guys from</Text>
      )
    }
  }
}