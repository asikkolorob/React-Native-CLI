import React, {Component} from 'react';
import {Button, Modal, View,StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

class ComponentModal extends Component {

    constructor(){
        super();
        this.state={
            modalvisibility:false
        }
    }
    style=StyleSheet.create({
        modalView:{
            height:100,
            width:300,
            backgroundColor:'#686867',
            margin:60,
            padding:25,
            elevation:5,
            shadowColor:'#000',
            alignItems:'center',
            shadowOffset:{height: 0,width: 2}
        }
    })

    opnModal=()=>{
        this.setState({modalvisibility:true})
    }

    closeModal=()=>{
        this.setState({modalvisibility:false})

    }


    render() {
        return (
            <View style={{height:'100%',
                width:'100%',
                backgroundColor:'#30644B'}}>
                <Modal visible={this.state.modalvisibility}>
                    <View style={this.style.modalView} >
                        <Text>I am Modal from react-native</Text>
                        <Button onPress={this.closeModal} title="Close"/>

                    </View>
                </Modal>
                <Button onPress={this.opnModal} title="open"/>

            </View>
        );
    }
}

export default ComponentModal;
