import React, { Component } from 'react'
import {
    View,
    StatusBar,
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    Alert 
} from 'react-native';

export class Signup extends Component {

LoginButtonAlert=()=>{
    Alert.alert("Login Success");
}
SignupButtonAlert=()=>{
    Alert.alert("SignupButton SuccessFully Working")
}
    render() {
    return (
      //Main Container
        <View style={styles.container1}>
            {/* StatusBar */}
            <StatusBar backgroundColor="#138D75" barStyle="light-content" hidden={false}/>
            {/*Logo */}
            <View style={styles.container2}>
                <Image style={styles.imageStyle} source={require('../src/images/logo.png')} />
                <Text style={styles.logoText}>SamThing text</Text>
            </View>
            {/*Form */}
            <View style={styles.container3}>
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid="transparent"
                    placeholder='Email'
                    placeholderTextColor='#02461B'
                    selectionColor='#000'
                    keyboardType='email-address'
                />
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid="transparent"
                    placeholder='Password'
                    secureTextEntry={true}
                    selectionColor='#000'
                    placeholderTextColor='#02461B'
                />
                <TouchableOpacity onPress={this.LoginButtonAlert} style={styles.btnStyle}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
            </View>
            {/*LoginButton And SignupText */}
            <View style={styles.signupTextStyle}>
                <Text style={styles.signupText}>Don't have an account yet?</Text>
                <TouchableOpacity onPress={this.SignupButtonAlert}>
                <Text style={styles.signupButton}>Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    container1:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#85BA98'
    },
    container2:{
        flexGrow:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    imageStyle:{
        width:90,
        height:70
    },
    logoText:{
        marginVertical:15,
        fontSize:20,
        color:'#0E4823'
    },
    container3:{
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center'
    },
    inputBox:{
        width:300,
        backgroundColor:'#138D75',
        borderRadius:25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#1E5933',
        marginVertical:10
    },
    btnText:{
        color:'#138D75',
        fontSize:16,
        fontWeight:'500'
    },
    btnStyle:{
        backgroundColor:'#1E5933',
        borderRadius:25,
        width:300,
        marginVertical:10,
        alignItems:'center',
        paddingVertical:12
    },
    signupTextStyle:{
        flexGrow:1,
        alignItems:'flex-end',
        justifyContent:'center',
        paddingVertical:16,
        flexDirection:'row'
    },
    signupText:{
        color:'#02461B',
        fontSize:16
    },
    signupButton:{
        color:'#02461B',
        fontSize:16,
        fontWeight:'800'
    }
})

export default Signup
