import React, {Component} from 'react';
import {View,Switch} from 'react-native';
import {Text} from 'react-native';

class ComponentSwitch extends Component {

    constructor(){
        super();
        this.state={
            switchStatus:false
        }
    }

    render() {
        return (
            <View style={{height:'100%',
              width:'100%',
              backgroundColor:'#B38F70'}}>
                <Switch
                    value={this.state.switchStatus}
                    onValueChange={(switchValue)=>{this.setState({switchStatus:switchValue})}}
                    style={{padding:50}}
                />
                <Text style={{textAlign:'center',
                  fontSize:70,
                  paddingTop:200}}>{this.state.switchStatus? 'On':'Of'}</Text>
            </View>
        );
    }
}

export default ComponentSwitch;
