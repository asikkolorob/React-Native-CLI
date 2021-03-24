import React, { Component } from 'react'
import { View,Text, StyleSheet } from 'react-native'

export class About extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.TextStyle}>This Is ABOUT Page</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#BFC9CA'
    },
    TextStyle:{
        fontSize:30
    }
})
export default About
