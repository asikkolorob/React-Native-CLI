import React, { Component } from "react";
import { SafeAreaView ,Text} from "react-native";

class ComponentSafeAreaView extends Component {
  render() {
    return (
      <SafeAreaView style={{height:'100%',
        width:'100%',
        backgroundColor:'#60ACE8'}}>

        <Text style={{fontSize:24,
          textAlign:'center',
          paddingTop:100}}>This is Safe Area View</Text>
        <Text style={{ textAlign:'center',padding:10}}>//ata same view er motonei but aita use korle ios e kono plm korbe nah//</Text>
      </SafeAreaView>
    );
  }
}

export default ComponentSafeAreaView;
