import React from 'react';
import { Text,View,StyleSheet,Button } from 'react-native';

const DetailScreen = ({navigation}) =>{
    return(
        <View style={styles.container2}>
            <Text>Details Screen</Text>
            <Button 
                title='go to detailsScreen... again'
                onPress={() => navigation.push('Details')}
            />
            <Button 
                title='go to Home'
                onPress={() => navigation.navigate('Home')}
            />
            <Button 
                title='go back'
                onPress={() => navigation.goBack()}
            />
            <Button 
                title='go to the first screen'
                onPress={() => navigation.popToTop()}
            />
        </View>
            
            
    
    
    )
}
const styles = StyleSheet.create({
    container2:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
export default DetailScreen;