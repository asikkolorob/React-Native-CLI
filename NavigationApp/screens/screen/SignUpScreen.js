import React from 'react';
import { View,Text,
    Button,
    Dimensions,
    TouchableOpacity,
    TextInput,
    StatusBar,
    Platform,
    StyleSheet} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient'; 
import SimpleLineIcons from 'react-native-vector-icons/Feather';   


const SignInScreen = ({navigation}) => {

    const [data,setData] = React.useState({
        email:'',
        password:'',
        Confirm_Password:'',
        check_textInputChage:'',
        secureTextEntry:true,
        confirm_secureTextEntry:true
    });
    const textInputChage = (val) => {
        if(val.length !== 0 ) {
            setData({
                ...data ,
                email:val,
                check_textInputChage: true
            });
        }else {
            setData({
                ...data ,
                email:val,
                check_textInputChage: false
            });
        }
    }

    const hendelPasswordChage = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const hendelConfirmPasswordChage = (val) => {
        setData({
            ...data,
            Confirm_Password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle='light-content' hidden={false}/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <Animatable.View 
                animation='fadeInUpBig'
                style={styles.footer}
            >
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <SimpleLineIcons 
                        name='user'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput 
                        placeholder='Your Email'
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => textInputChage(val)}
                    />
                    {data.check_textInputChage ? 
                    <Animatable.View
                        animation='bounceIn'
                    >
                        <SimpleLineIcons 
                            name='check-circle'
                            color='green'
                            size={20}
                        />
                    </Animatable.View>
                    : null }
                </View>
                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Password</Text>
                <View style={styles.action}>
                    <SimpleLineIcons 
                        name='lock'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput 
                        placeholder='Your Password'
                        secureTextEntry={data.updateConfirmSecureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => hendelConfirmPasswordChage(val)}
                    />
                    <TouchableOpacity
                        onPress={updateConfirmSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                        <SimpleLineIcons 
                            name='eye-off'
                            color='green'
                            size={20}
                        />
                        :
                        <SimpleLineIcons 
                            name='eye'
                            color='green'
                            size={20}
                        />
                        }
                    </TouchableOpacity>
                </View>

                <Text style={[styles.text_footer,{
                    marginTop:35
                }]}>Confirm Password</Text>
                <View style={styles.action}>
                    <SimpleLineIcons 
                        name='lock'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput 
                        placeholder='Confirm Your Password'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => hendelPasswordChage(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                        <SimpleLineIcons 
                            name='eye-off'
                            color='green'
                            size={20}
                        />
                        :
                        <SimpleLineIcons 
                            name='eye'
                            color='green'
                            size={20}
                        />
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign,{
                                color:'#fff'
                            }]}>Sign Up</Text>
                        </LinearGradient>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={[styles.signIn,{
                                borderColor:'#009387',
                                borderWidth:1,
                                marginTop:15
                            }]}
                        >
                            <Text style={[styles.textSign,{
                                color:'#009387'
                            }]}>Sign In</Text>
                        </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
}
export default SignInScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#009387',
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:40
    },
    footer:{
        height:'72%',
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30
    },
    text_header:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:30
    },
    text_footer:{
        color:'#05375a',
        fontSize:18
    },
    action:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5
    },
    textInput:{
        flex:1,
        marginTop: Platform.os === 'ios' ? 0 : -12,
        paddingLeft:10,
        color:'#05375a'
    },
    button:{
        alignItems:'center',
        marginTop:50
    },
    signIn:{
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    textSign:{
        fontSize:18,
        fontWeight:'bold',

    }
})