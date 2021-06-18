import React, { Component } from 'react'
import {Navigation} from 'react-native-navigation'
import {StyleSheet, View, Text, StatusBar,Image,TextInput,TouchableOpacity,Alert} from 'react-native';
export class Login extends Component {

    goLoginPage=()=>{
      Navigation.push(this.props.componentId,{
        component: {
          name: 'HomePage',
          options:{
            topBar:{title:{text:'Home Page'},subtitle:{text:'Practice Purpose App'}},
            bottomTab: {
              icon: require('../images/home.png'),
              text:'Home',
              textColor:'#000',
              selectedTextColor:'#000',
              selectedIconColor: '#F85C70',
              selectedBackgroundColor:'#F85C70',
              activeBackgroundColor: '#F85C70',
            }
          },
        }
      })
    }

  signBtnAlert=()=>{
    Alert.alert('Signin Success');
  }
  
  render() {
    return (
      <View style={styles.container}>

        <StatusBar 
          backgroundColor="#D35400" 
          hidden={false}
        />
        <Image source={{uri:'https://cdn.pixabay.com/photo/2016/11/29/11/16/man-1869135__340.jpg'}}
          style={styles.imgStyle}
        /> 

        <Text style={styles.textStyle1}>Welcome, Guest!</Text>
        <Text style={styles.textStyle2}>Already have account?</Text>

        <View style={styles.container2}>
          <TextInput style={styles.inputBox} 
            underlineColorAndroid="transparent"
            placeholder='Username'
            placeholderTextColor='#fff'
            selectionColor='#02461B'
          />
          <TextInput style={styles.inputBox} 
            underlineColorAndroid="transparent"
            placeholder='Email'
            placeholderTextColor='#fff'
            selectionColor='#02461B'
            keyboardType='email-address'
          />
          <TextInput style={styles.inputBox} 
            underlineColorAndroid="transparent"
            placeholder='Password'
            secureTextEntry={true}
            selectionColor='#02461B'
            placeholderTextColor='#fff'
          />
          <TextInput style={styles.inputBox} 
            underlineColorAndroid="transparent"
            placeholder='Confirm Password'
            secureTextEntry={true}
            selectionColor='#02461B'
            placeholderTextColor='#fff'
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity 
              style={styles.btnStyle}
              onPress={this.goLoginPage}
            >
              <Text style={styles.textStyle}>Create An Account</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnStyle}
              onPress={this.signFbAlert}
            >
              <Text style={styles.textStyle}>Sign Up With Facebook </Text>
            </TouchableOpacity>
          </View>
          
        </View>
      
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#000'
  },
  container2:{
    height:'60%',
    width:'90%',
    backgroundColor:'#F8C471',
    marginHorizontal:22,
    borderRadius:25,
    marginTop:30,
    padding:10
  },
  btnContainer:{
    flexDirection:'column-reverse',
    marginTop:20,
    marginLeft:10
    
  },
  imgStyle:{
    height:190,
    width:'100%'
  },
  inputBox:{
    width:340,
    backgroundColor:'#DC7633',
    borderRadius:25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#fff',
    marginVertical:10
  },
  btnStyle:{
    backgroundColor:'#1E5933',
    borderRadius:20,
    width:280,
    marginVertical:10,
    alignItems:'center',
    paddingVertical:12,
    margin:20
  },
  textStyle:{
    color:'#fff',
    fontSize:16,
    fontWeight:'500'
  },
  textStyle1:{
    color:'#fff',
    fontSize:30,
    textAlign:'center',
  },
  textStyle2:{
    color:'#fff',
    fontSize:18,
    textAlign:'center',
    marginTop:2
  }
})
export default Login
