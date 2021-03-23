import React, {Component} from 'react';
import {ActivityIndicator, View,Text} from 'react-native';

class ComponentActivityIndicator extends Component {
    render() {
        return (
            <View style={{height:'100%',
              width:'100%',
              backgroundColor:'#C3C3C8'}}>
                <ActivityIndicator size="large" color="#494C6A" style={{paddingTop:50}}/>
                <Text style={{textAlign:'center',
                  fontSize:24,
                  paddingTop:100,
                  color:'#494C6A'}}>Core Component Activity Indicator</Text>
            </View>
        );
    }
}

export default ComponentActivityIndicator;
