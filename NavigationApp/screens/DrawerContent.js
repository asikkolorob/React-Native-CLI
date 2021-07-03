import React from 'react';
import {View,StyleSheet,Button,
    Text,
    Image,
    TouchableOpacity,
    Switch,
    TouchableHighlight,
    SafeAreaView} from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/Ionicons';

import { AuthContext } from './components/context'

export function DrawerContent (props) {

    const [isDarkTheme,setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    const {signOut} = React.useContext(AuthContext);

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container2} {...props}>

                <Image source={require('../images/asik.jpg')}
                    style={styles.imgStyle} >
                </Image>
                <Text style={styles.heddingText}>Ashikur Rahman</Text>
                <TouchableOpacity>
                    <Text style={{marginTop:6}}>View Profile</Text>
                </TouchableOpacity>

                <View style={{flexGrow:1,marginTop:50}}>
                    {
                        //Tab Bar Buttons
                    }
                   <TouchableOpacity onPress={() => {props.navigation.navigate('Home')}}>
                        <View style={styles.container3}>
                            <SimpleLineIcons name={'home'} size={25} />
                            <Text style={styles.iconText}>Home</Text>
                        </View>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={() => {props.navigation.navigate('Profile')}}>
                        <View style={styles.container3}>
                            <SimpleLineIcons name={'person'} size={25} />
                            <Text style={styles.iconText}>Profile</Text>
                        </View>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={() => {props.navigation.navigate('Bookmark')}}>
                        <View style={styles.container3}>
                            <SimpleLineIcons name={'bookmark'} size={25} />
                            <Text style={styles.iconText}>Bookmarks</Text>
                        </View>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={() => {props.navigation.navigate('Explore')}}>
                        <View style={styles.container3}>
                            <SimpleLineIcons name={'settings'} size={25} />
                            <Text style={styles.iconText}>Settings</Text>
                        </View>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={() => {props.navigation.navigate('Support')}}>
                        <View style={styles.container3}>
                            <SimpleLineIcons name={'home'} size={25} />
                            <Text style={styles.iconText}>Support</Text>
                        </View>
                   </TouchableOpacity>
                   <View style={styles.justTxt}>
                       <Text style={{fontSize:20}}>Preferences</Text>
                   </View>
                    <TouchableHighlight onPress={() => {toggleTheme()}} 
                        underlayColor='#F8C471'
                        style={{padding:30}}
                    >
                        <View style={styles.SwitchContainer}>
                            <Text style={styles.iconText}>Dark Theme</Text>
                            <View pointerEvents='none'>
                                <Switch style={{marginLeft:40}}
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    ios_backgroundColor="#3e3e3e"
                                    value={isDarkTheme}
                                />
                            </View>
                            
                        </View>
                    </TouchableHighlight>
                </View>
                
                <View>
                <TouchableOpacity
                    onPress={() => {signOut()}}
                >
                        <View style={styles.container3}>
                            <SimpleLineIcons name={'log-out'} size={25} />
                            <Text style={styles.iconText}>Log Out</Text>
                        </View>
                   </TouchableOpacity>
                </View>
                
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F8C471',
        alignItems:'flex-start',
        justifyContent:'flex-start'
    },
    container2:{
        justifyContent:'flex-start',
        padding:15
    },
    imgStyle:{
        width:60,
        height:60,
        borderRadius:14,
        marginTop:8
    },
    heddingText:{
        fontSize:25,
        fontWeight:'bold',
        marginTop:20
    },
    container3:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:8,
        // backgroundColor:'#fff',
        borderRadius:8,
        paddingLeft:13,
        paddingRight:35,
        marginTop:10
    },
    iconText:{
        fontSize:15,
        fontWeight:'bold',
        marginLeft:15
    },
    justTxt:{
        alignItems:'center',
        height:60,
        width:"100%",
        padding:15,
        backgroundColor:'#FCF3CF',
        borderRadius:8,
        marginTop:20
    },
    SwitchContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        
    }
});