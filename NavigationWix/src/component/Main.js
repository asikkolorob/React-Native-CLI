import React, { Component } from 'react'
import { View,Text, StyleSheet} from 'react-native'
import {Navigation} from 'react-native-navigation'

export class Main extends Component {
  //This props from component layout
  // constructor(props){
  //   super();
  //   this.state={}
  // }
  
  //SideMenu/Bar
  constructor(props){
    super(props);
    Navigation.events().bindComponent(this);
  }

  NavigationButtonPressed({componentId}){
    Navigation.mergeOptions(this.props.componentId,{
      sideMenu:{
        left:{
          visible:true
        }
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'#000'}}>{this.props.subTitle}</Text>
        <View style={styles.container2}>
          <Text style={styles.textStyle}>This is Main Page</Text>
          <Text>**************************</Text>
          <View style={styles.container3}>
            <Text style={styles.textStyle2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Text>
            <Text style={styles.textStyle2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Text>
            <View style={styles.container4}>
              <Text>**************************************************</Text>
              <Text>******************************************</Text>
              <Text>**************************************</Text>
              <Text>*********************************</Text>
              <Text>*****************************</Text>
              <Text>*************************</Text>
              <Text>*********************</Text>
              <Text>*****************</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#7DCEA0'
  },
  textStyle:{
    fontSize:30,
    color:'#fff',
    paddingTop:30
  },
  container2:{
    height:'80%',
    width:'80%',
    backgroundColor:'#AA8D89',
    borderRadius:20,
    justifyContent:'flex-start',
    alignItems:'center',
  },
  container3:{
    height:'50%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:130,

  },
  textStyle2:{
    fontSize:18,
    color:'#fff',
    marginVertical:10,
    marginHorizontal:10
  },
  container4:{
    height:'60%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:60
  }
})
export default Main
