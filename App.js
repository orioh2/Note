import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
 
export default class App extends React.Component {
  onPressLearnMore(){
       alert('Welcome to React Native.');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Mobile Application Development</Text>
        <Text></Text>
        <Button
         onPress={this.onPressLearnMore}
         title="Click"
         color="#FFA500"
        />
      </View>
    );  
  } 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
