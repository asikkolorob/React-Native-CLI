import React, { Component } from 'react'
import {View,Text, StyleSheet } from 'react-native'

export class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.TextStyle}>This Is HOME Page</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#E6B0AA'
    },
    TextStyle:{
        fontSize:30
    }
})
export default Home
