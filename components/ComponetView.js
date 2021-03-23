import React, {Component} from 'react';
import {View} from 'react-native';
class ComponetView extends Component {
    render() {
        return (
            <View style={{ flexDirection:'row',
                justifyContent:'center',
                height:'100%',
                width:'100%',
                backgroundColor:'#EA4335'}}>
                <View style={{ flexDirection:'row',
                    justifyContent:'center',
                    height:'80%',
                    width:'80%',
                    backgroundColor:'#34A853'}}>
                    <View style={{ flexDirection:'row',
                        justifyContent:'center',
                        height:'60%',
                        width:'60%',
                        backgroundColor:'#4285F4'}}>
                        <View style={{ flexDirection:'row',
                            justifyContent:'center',
                            height:'40%',
                            width:'40%',
                            backgroundColor:'#FCCD43'}}>
                            <View style={{ flexDirection:'row',
                                justifyContent:'center',
                                height:'20%',
                                width:'20%',
                                backgroundColor:'#000'}}>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default ComponetView;
