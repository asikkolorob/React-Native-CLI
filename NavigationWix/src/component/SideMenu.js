import React, { Component } from 'react'
import { View,StyleSheet,Text, Image} from 'react-native'

export class SideMenu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container2}>
                    <Image 
                        source={require('../images/man-2037255__340.jpg')}
                        style={styles.imageStyle}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginRight:60,
        backgroundColor:'#7DCEA0'
    },
    container2:{
        flex:1
    },
    imageStyle:{
        height:200,
        width:'100%',
        resizeMode: "cover",
    }
})
export default SideMenu
