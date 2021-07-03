import React from 'react';
import { Text,View,StyleSheet,Button,SafeAreaView } from 'react-native';

const SupportScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text>Support Screen</Text>
            <Button 
                title='go to homeScreen'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center', 
        justifyContent:'center'
    },
    
})
export default SupportScreen;