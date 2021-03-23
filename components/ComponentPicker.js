import React, {Component} from 'react';
import {Picker, View} from 'react-native';

class ComponentPicker extends Component {

    constructor(){
        super();
        this.state={
            selectedItemValue:" ",
            selectedItemPosition:" "
        }
    }

    render() {
        return (
            <View>
                <Picker
                    selectedValue={this.state.selectedItemValue}
                    onValueChange={(itemValue, itemPosition)=>{this.setState({selectedItemValue:itemValue,selectedItemPosition:itemPosition})}}
                >

                    <Picker.Item label="Bangladesh" value="Bangladesh"/>
                    <Picker.Item label="India" value="India"/>
                    <Picker.Item label="Pakistan" value="Pakistan"/>
                    <Picker.Item label="Kenada" value="Kenada"/>
                    <Picker.Item label="Japan" value="Japan"/>

                </Picker>
            </View>
        );
    }
}

export default ComponentPicker;
