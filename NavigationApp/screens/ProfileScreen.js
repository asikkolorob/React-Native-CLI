import React from 'react';
import { Text,View,StyleSheet,Button,SafeAreaView } from 'react-native';

const ProfileScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <Button 
                title='go to profileScreen'
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
export default ProfileScreen;