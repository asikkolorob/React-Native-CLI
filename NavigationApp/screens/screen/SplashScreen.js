import React from 'react';
import { View,Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    Image } from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient'; 
import SimpleLineIcons from 'react-native-vector-icons/Feather';   

const SplashScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle='light-content' hidden={false}/>
            <View style={styles.header}>
                <Animatable.Image 
                        animation='bounceIn'
                        duraton='1500'
                    source={require('../../images/processed.png')}
                    style={styles.logo}
                />
            </View>
            <Animatable.View 
                style={styles.footer}
                animation='fadeInUpBig'
                >
                <Text style={styles.title}>Stay connected with everyone</Text>
                <Text style={styles.text}>SignIn with account</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Get Started</Text>
                            <SimpleLineIcons 
                                name='chevron-right'
                                color='#fff'
                                size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
}
export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#009387'
    },
    header:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    footer:{
        flex:1,
        backgroundColor:'#fff',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        paddingVertical:50,
        paddingHorizontal:30
    },
    logo:{
        width:height_logo,
        height:height_logo
    },
    title:{
        fontWeight:'bold',
        color:'#05375a',
        fontSize:30
    },
    text:{
        marginTop:5,
        color:'grey'
    },
    button:{
        alignItems:'flex-end',
        marginTop:30
    },
    signIn:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row'
    },
    textSign:{
        color:'#fff',
        fontWeight:'bold'
    }
});