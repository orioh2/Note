import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';

export default class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     username: ''
   };
 }
 render() {
   return (
     <View style={styles.container}>
      <TextInput
         value={this.state.username}
         onChangeText={(username) => 
          this.setState({ username })}
         placeholder={'Please Enter Username!!!'}
         style={styles.input}
       />
       <Text style={{color: 'green'}}>
         Username is : {this.state.username}</Text>
     </View>     
   );
 }
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#ffffff',
 },
 input: {
   width: 250,
   height: 44,
   padding: 10,
   marginBottom: 10,
   backgroundColor: '#ecf0f1'
 },
});