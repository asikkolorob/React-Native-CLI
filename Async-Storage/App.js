import React, { Component } from "react";
import {View,Button,Text,Alert,TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class App extends Component {
//(1)+(4)+(6)+(7) output show and text change
  constructor() {
    super();
    this.state={
      AllData:".......",
      NameData:" " ,
      RollData:" ",
      ClassData:""
    }
  }
//(3) save data
  saveData=async()=>{
    try {
      const AllDataArray=[this.state.NameData,this.state.RollData,this.state.ClassData];
      const AllDataArrayString = AllDataArray.toString();
      await AsyncStorage.setItem('AllDataKey',AllDataArrayString)
      Alert.alert('Data Save');
    }
    catch (e) {
      Alert.alert('Data Save Fail ! Try Again');
    }
  }
//(2) get data
  getData=async()=>{
    try {
        const selectedData = await AsyncStorage.getItem('AllDataKey');
        this.setState({AllData:selectedData});
    }
    catch (e) {
      Alert.alert('Data Get Fail !! Try Again');
    }
  }
//(5) get data
  deleteData=async()=>{
    try {
      await AsyncStorage.clear();
      Alert.alert('Delete Success');
    }
    catch (e) {
      Alert.alert('Delete fail !! Try Again');
    }
  }

    render() {
        return (
          <View>
            {/*(4) Data change in textInput 1*/}
            <View style={{margin:10}}>
              <TextInput onChangeText={(text)=>{this.setState({NameData:text})}} style={{borderWidth:1,borderColor:'blu',height:60,padding:5}} placeholder="Your name"/>
            </View>

            {/*(6) Data change in textInput 2*/}
            <View style={{margin:10}}>
              <TextInput onChangeText={(text)=>{this.setState({RollData:text})}} style={{borderWidth:1,borderColor:'blu',height:60,padding:5}} placeholder="Your Roll"/>
            </View>

            {/*(7) Data change in textInput 3*/}
            <View style={{margin:10}}>
              <TextInput onChangeText={(text)=>{this.setState({ClassData:text})}} style={{borderWidth:1,borderColor:'blu',height:60,padding:5}} placeholder="Your Class"/>
            </View>

            {/*(3) Data save*/}
            <View style={{margin:10}}>
              <Button onPress={this.saveData} title="save"/>
            </View>

            {/*(2) Data get*/}
            <View style={{margin:10}}>
              <Button onPress={this.getData} style={{fontSize:20}} title="get"/>
            </View>

            {/*(5) delete*/}
            <View style={{margin:10}}>
              <Button onPress={this.deleteData} style={{fontSize:20}} title="Delete"/>
            </View>

            {/*(1) Data show*/}
            <View style={{margin:10}}>
              <Text style={{fontSize:30}}>{this.state.AllData}</Text>
            </View>

          </View>
        );
    }
}

export default App;

