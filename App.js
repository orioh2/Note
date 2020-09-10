import React from 'react';
import { Picker, View, StyleSheet, Text } from 'react-native';

export default class App extends React.Component {
  state = {choosenLabel: '', choosenindex: ''}
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.text}>{this.state.choosenLabel}</Text>
        <Text style = {styles.text}>{this.state.choosenindex}</Text>
        <Picker selectedValue={this.state.choosenLabel}
          onValueChange={
          (itemValue, itemIndex) => this.setState({
               choosenLabel: itemValue, 
               choosenindex:itemIndex})
        }>
            <Picker.Item label = "JavaScript" value = "No.1" />
            <Picker.Item label = "TypeScript" value = "No.2" />
            <Picker.Item label = "Angular" value = "No.3" />
            <Picker.Item label = "React" value = "No.4" />
            <Picker.Item label = "Vue" value = "No.5" />            
        </Picker>        
      </View>
    );  
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  text: {
      fontSize: 20,
      alignSelf: 'center',
   }
});
