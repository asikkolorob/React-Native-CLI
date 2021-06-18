import React, { Component } from 'react'
import { View,Text, StyleSheet} from 'react-native'

export class Contact extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.TextStyle}>ContactPage</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#150D1D'
    },
    TextStyle:{
        fontSize:40,
        color:'#fff'
    }
})
export default Contact