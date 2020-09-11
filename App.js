import React from 'react';
import {View, Text,  StyleSheet, 
  PermissionsAndroid,Platform} from 'react-native';
import Geolocation from 
'@react-native-community/geolocation';

export default class App extends React.Component {
  state = {
    currentLongitude: 'unknown',//Initial Longitude
    currentLatitude: 'unknown',//Initial Latitude
 }
 componentDidMount = () => {
  var that =this;
  if(Platform.OS === 'ios'){
    this.callLocation(that);
  }else{
    async function requestLocationPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.
          ACCESS_FINE_LOCATION,{
            'title': 'Location Access Required',
            'message': 'This App needs to Access your location'
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          that.callLocation(that);
        } else {
          alert("Permission Denied");
        }
      } catch (err) {
        alert("err",err);
        console.warn(err)
      }
    }
    requestLocationPermission();
  }    
 }
 callLocation(that){
      Geolocation.getCurrentPosition(
          (position) => {
          const currentLongitude = 
          JSON.stringify(position.coords.longitude);          
          const currentLatitude = 
          JSON.stringify(position.coords.latitude);
          that.setState({ currentLongitude:currentLongitude });
          that.setState({ currentLatitude:currentLatitude });          
       },
       (error) => alert(error.message),
       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    that.watchID = Geolocation.watchPosition((position) => {
        console.log(position);
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        that.setState({ currentLongitude:currentLongitude });
        that.setState({ currentLatitude:currentLatitude });
    });
 }
 componentWillUnmount = () => {
    Geolocation.clearWatch(this.watchID);
 }
 render() {
    return (
       <View style = {styles.container}>
          <Text style = {styles.boldText}>
             ::: Location :::
          </Text>
          <Text style={{justifyContent:'center',alignItems: 'center',marginTop:16}}>
            Longitude: {this.state.currentLongitude}
          </Text>
          <Text style={{justifyContent:'center',alignItems: 'center',marginTop:16}}>
            Latitude: {this.state.currentLatitude}
          </Text>
       </View>
    )
 }
}
const styles = StyleSheet.create ({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 50,
    padding:16,
    backgroundColor:'white'
 },
 boldText: {
    fontSize: 30,
    color: 'red',
 }
})
