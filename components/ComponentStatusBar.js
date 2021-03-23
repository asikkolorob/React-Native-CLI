import React, {Component} from 'react';
import {StatusBar, View,Text} from 'react-native';

class ComponentStatusBar extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor="#BC9115" barStyle="dark-content" hidden={false}/>

            </View>
        );
    }
}

export default ComponentStatusBar;
