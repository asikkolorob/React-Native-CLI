import React, {Component} from 'react';
import {View,Button,Alert} from 'react-native';

class ComponentButtonAndAlert extends Component {


    alert=()=>{
        Alert.alert("Hi bro my name is Ashik");
    }


    render() {
        return (
            <View style={{height:'100%',
                width:'100%',
                backgroundColor:'#000',
                padding:100}}>
               <Button title="Go" onPress={this.alert}/>
            </View>
        );
    }
}

export default ComponentButtonAndAlert;
