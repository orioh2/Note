import React, { Component } from 'react';
import { Alert, Button, Text, View, StyleSheet } from 'react-native';
 
export default class App extends Component {
  _simpleAlertHandler=()=>{
      alert('Simple Alert');
  }
  _twoOptionAlertHandler=()=>{
      Alert.alert('::: Alert :::','Two Options Alert.',
      [
        {text: 'Yes', onPress: () => 
        console.log('Yes Pressed')},
        {text: 'No', onPress: () => 
        console.log('No Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
    );
  }
  _threeOptionAlertHandler=()=>{
    Alert.alert('::: Alert :::','Three Options Alert.',
      [
        {text: 'Option', onPress: () => 
        console.log('Option Pressed')},
        {text: 'Yes', onPress: () => 
        console.log('Yes Pressed')},
        {text: 'OK', onPress: () => 
        console.log('OK Pressed')},
      ],
      { cancelable: true }
    );
  }
  render() {
    return (
      <View style={styles.container}>       
        <Button title='Simple Alert' 
        onPress={this._simpleAlertHandler}/>
        <Text/>
        <Button title='Alert with Two Options' 
        onPress={this._twoOptionAlertHandler}/>
        <Text/>
        <Button title='Alert with Three Options' 
        onPress={this._threeOptionAlertHandler}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
