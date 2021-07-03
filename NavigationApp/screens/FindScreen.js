import React from 'react';
import { View,Text,Button,StyleSheet } from 'react-native';

const FindScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Find Screen</Text>
            <Button 
                title="Click Here"
                onPress={() => navigation.navigate('button clicked')}
            />
        </View>
    );
}
export default FindScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})