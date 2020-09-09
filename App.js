import React, { Component } from 'react';
import { Text, View } from 'react-native';
 
class MyCustomTextWith extends Component {
  render() {
    return (
      <View>
        <Text>Your First Name is {this.props.firstname}! 
              and Last name is{' '}{this.props.secondname}
        </Text>
      </View>
    );
  }
}
export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{justifyContent: 'center',
      alignItems: 'center', flex:1}}>
        
        <MyCustomTextWith 
          firstname='fName1' 
          secondname='lname1'/>        
        <MyCustomTextWith 
          firstname='fName2' 
          secondname='lname2' />
      </View>
    );
  }
}