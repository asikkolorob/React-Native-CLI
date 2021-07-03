import React from 'react';

import {View,Text,StyleSheet,TouchableOpacity,StatusBar} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


const Tabs = (props) => {
    return(
        <View style={styles.container1}>
            <StatusBar backgroundColor="#D35400" barStyle="dark-content" 
                hidden={false}
            />
            <TouchableOpacity style={styles.plusButtonStyle}>
                <SimpleLineIcons name={'plus'} color={'#F8C471'} 
                    size={65} containerStyle={{alignSelf:'center'}}
                    reverse
                />
            </TouchableOpacity>
            <View style={styles.container}>
                <TouchableOpacity style={styles.barItemView}>
                    <SimpleLineIcons name={'home'} color={'#000'} 
                        size={30} 
                    />
                    <Text style={styles.normalText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.barItemView}>
                    <SimpleLineIcons name={'bell'} color={'#D0D3D4'} 
                        size={30}
                        
                    />
                    <Text style={styles.normalText}>Updates</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.barItemView}>
                    
                    <Text style={styles.postText}>CreatePost</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.barItemView}>
                    <SimpleLineIcons name={'user'} color={'#D0D3D4'} 
                        size={30}
                    />
                    <Text style={styles.normalText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.barItemView}>
                    <SimpleLineIcons name={'settings'} color={'#D0D3D4'} 
                        size={30}
                    />
                    <Text style={styles.normalText}>Setting</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container1:{
        height:60,
        justifyContent:'flex-end',
        backgroundColor:'yellow'
    },
    container:{
        backgroundColor:'#76448A',
        height:67,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        paddingVertical:5,
    },
    barItemView:{
        alignItems:'center',
        justifyContent:'flex-end',
        marginLeft:10
    },
    plusButtonStyle:{
        position:'absolute',
        alignSelf:'center',
        backgroundColor:'#D4AC0D',
        width:65,
        height:67,
        borderRadius:33,
        zIndex:10,
        bottom:35

    },
    postText:{
        color:'#fff',
        fontWeight:'bold'
    },
    normalText:{
        color:'#D0D3D4',
    }
})
export default Tabs;