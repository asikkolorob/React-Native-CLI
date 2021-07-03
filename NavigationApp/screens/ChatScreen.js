import React from 'react';
import { View,Text,Button,StyleSheet } from 'react-native';

const ChatScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Chat Screen</Text>
            <Button 
                title="Click Here"
                onPress={() => navigation.navigate('button clicked')}
            />
        </View>
    );
}
export default ChatScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})