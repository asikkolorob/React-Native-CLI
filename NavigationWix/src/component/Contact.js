import React, { Component } from 'react'
import { View,Text, StyleSheet} from 'react-native'

export class Contact extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.TextStyle}>This Is CONTACT Page</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5CBA7'
    },
    TextStyle:{
        fontSize:30
    }
})
export default Contact
