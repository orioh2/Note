import React, { Component } from 'react';
import Slider from '@react-native-community/slider'
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {
   constructor(props) {
   super(props);
   this.state = {
     sliderValue: 50
   };
 }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'black'}}>
          Value : {this.state.sliderValue}</Text>      
        <Slider 
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1} 
          value={this.state.sliderValue}
          onValueChange={(sliderValue) => 
            this.setState({ sliderValue })}
        />      
      </View>
    );
  }
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   padding:20,
   justifyContent: 'center',
   backgroundColor: '#ecf0f1',
 }
});
