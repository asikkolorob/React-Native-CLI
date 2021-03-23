// import React, {Component} from 'react';
// import {TextInput, View} from 'react-native';
//
// class ComponentTextInput extends Component {
//     render() {
//         return (//TextInput akhane sob ache!!
//             <View style={{height:'100%',width:'100%',backgroundColor:'#5E9A86'}}>
//                 <TextInput multiline={false} autoFocus={true} maxLength={20} textAlign='center' placeholderTextColor='red' placeholder="Your name" style={{margin:20,padding:10,borderWidth:3,borderColor:'#fff',height:50}}/>
//             </View>
//         );
//     }
// }
// export default ComponentTextInput;

import React, {Component} from 'react';
import {View,TextInput,Button,Text,Alert } from 'react-native';
class ComponentTextInput extends Component {

    constructor(){
        super();
        this.state={
            num1:0,
            num2:0,
            result:" "
        }
    }

    addTwo=()=>{
       var x= this.state.num1 + this.state.num2;
       this.setState({result: x.toString()})

    }

    render() {
        return (
            <View style={{height:'100%',
              width:'100%',
              backgroundColor:'#CED4C912'}}>
                <TextInput onChangeText={(text)=>{this.setState({num1:parseInt(text)})}} placeholderTextColor='green' textAlign='center' autoFocus={true} multiline={false} placeholder="Number Two" style={{margin:20,
                  padding:10,
                  borderWidth:3,
                  borderColor:'#000',
                  height:50}}/>
                <TextInput onChangeText={(text)=>{this.setState({num2:parseInt(text)})}} placeholderTextColor='green' textAlign='center' autoFocus={true} multiline={false} placeholder="Number Two" style={{margin:20,
                  padding:10,
                  borderWidth:3,
                  borderColor:'#000',
                  height:50}}/>
                <Button onPress={this.addTwo} title="add"/>
                <Text style={{margin:10, fontSize:24}}>Result: {this.state.result}</Text>
            </View>
        );
    }
}

export default ComponentTextInput;


