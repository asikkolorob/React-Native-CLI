import React, { Component } from 'react'
import { View ,Text, Button, StyleSheet,ActivityIndicator} from 'react-native'

export class App extends Component {

  constructor(){
    super();
    this.state={
      simpleData:'............',
      loading:false
    }
  }

  callMyFristApi=()=>{
    this.setState({loading:true})//loading animation

    let URL='http://www.apishooter.com/getSimpleString';
    let config={Method:'GET'};

    fetch(URL,config)
      .then((responseInitial)=>responseInitial.headers.get('date'))//text(),status,headers,

      .then((responseFinal)=>{
        this.setState({simpleData:responseFinal})
      })

      .catch((error)=>{
        this.setState({simpleData:'server error'})
      })
      .finally(()=>{
        this.setState({loading:false})//loading animation
      })

  }

  render() {

    if(this.state.loading==true){
      return (
        <View style={styles.container}>
          <ActivityIndicator size='large' color='#fff'/>
        </View>
      )
    }
    else{
      return (
        <View style={styles.container}>
          <Text style={styles.textStyle}>{this.state.simpleData}</Text>
          <Button onPress={this.callMyFristApi} title='call'/>
        </View>
      )
    }

   
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    padding:20,
    backgroundColor:'#784212'
  },
  textStyle:{
    fontSize:20,
    padding:20,
    color:'#fff'
  }
})
export default App
