import React from 'react';
import { Text,View,StyleSheet,Button,SafeAreaView,StatusBar } from 'react-native';

const HomeScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#D35400" barStyle="dark-content" hidden={false}/>
            <Text>Home Screen</Text>
            <Button 
                title='go to detailsScreen'
                onPress={() => navigation.navigate('Details')}
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
export default HomeScreen;