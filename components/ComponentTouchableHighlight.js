import React, { Component } from "react";
import { View, Text, TouchableHighlight,Alert } from "react-native";

class ComponentTouchableHighlight extends Component {

  alertMe=()=>{
    Alert.alert("Core Component Touchable Highlight")
  }


  render() {
    return (
      <View style={{height:'100%',width:'100%', flexDirection:'column',
        backgroundColor:'#60ACE8',
        justifyContent:'center'}}>
        <TouchableHighlight underlayColor='#3498DB' onPress={this.alertMe}>
        <Text style={{fontSize:30,
          fontStyle:"bold",textAlign:'center'}}>Hi</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ComponentTouchableHighlight;
