// import React, {Component} from 'react';
// import {ImageBackground, View,Text} from 'react-native';
//
//
// class ComponentImageBackground extends Component {
//     render() {
//         return (
//             <View style={{flex:1,flexDirection:'column'}}>
//                 <ImageBackground style={{flex:1,resizeMode:'cover',justifyContent:'center'}} source={{uri:'https://cdn.pixabay.com/photo/2016/04/15/14/07/sunset-1331088__340.jpg'}}>
//
//
//                     <Text style={{color:'#000',fontSize:40}}>Hi Bro</Text>
//
//                 </ImageBackground>
//             </View>
//         );
//     }
// }
//
// export default ComponentImageBackground;
import React from "react";
import { ImageBackground, Text, View } from "react-native";

const App = () => (
    <View style={{height:'100%',
        width:'100%'}}>
        <ImageBackground source={{ uri: "https://cdn.pixabay.com/photo/2017/10/12/20/15/photoshop-2845779__340.jpg" }} style={{flex: 1,
            justifyContent: "center"}}>

            <Text style={{color: "#fff",
                fontSize: 46,
                fontWeight: "bold",
                textAlign: "center",
                backgroundColor: "#000000a0"}}>Inside</Text>
        </ImageBackground>
    </View>
);

export default App;
