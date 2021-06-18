import React, { Component } from 'react'
import {View,Text} from 'react-native'
import DeviceInfo from 'react-native-device-info';
export class App extends Component {

  constructor(props){
    super(props);
    this.state={
      MyDeviceInfo:''
    }
  }

  componentDidMount(){
    let model = DeviceInfo.getModel();
    this.setState({MyDeviceInfo:model});
  }

  render() {
    return (
      <View>
        <Text style={{fontSize:40}}>{this.state.MyDeviceInfo}</Text>
      </View>
    )
  }
}

export default App
