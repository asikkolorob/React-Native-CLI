import React, { Component } from 'react'
import { View,Text, StyleSheet} from 'react-native'

export class About extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>AboutPage</Text>
            </View>
        )
    }
}
const styles  = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#4B1E24',
    },
    textStyle:{
        fontSize:40,
        color:'#fff',
    }
})
export default About
