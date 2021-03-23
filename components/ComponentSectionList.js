import React, { Component } from "react";
import { View,Text,SectionList,SafeAreaView } from "react-native";

class ComponentSectionList extends Component {

  //1 number child
  itemChild=(itemData)=>{
    return(
      <View>
        <Text>{itemData}</Text>
      </View>
    )
  }

  //2 number child
  itemHeadChild=(header)=>{
    return(
      <View style={{height:20,width:'100%',backgroundColor:'blue'}}>
        <Text style={{Color:'#fff'}}>{header}</Text>
      </View>
    )
  }

  //jeson arey
  DATA=[
    {title:"Bangladesh", data:['Rongpur','Dhaka','khulna','Rajshahi']},
    {title:"Bangladesh", data:['Rongpur','Dhaka','khulna','Rajshahi']},
    {title:"Bangladesh", data:['Rongpur','Dhaka','khulna','Rajshahi']},
    {title:"Bangladesh", data:['Rongpur','Dhaka','khulna','Rajshahi']},
    {title:"Bangladesh", data:['Rongpur','Dhaka','khulna','Rajshahi']},
    {title:"Bangladesh", data:['Rongpur','Dhaka','khulna','Rajshahi']},
    {title:"Bangladesh", data:['Rongpur','Dhaka','khulna','Rajshahi']},
    {title:"Bangladesh", data:['Rongpur','Dhaka','khulna','Rajshahi']},
    {title:"Bangladesh", data:['Rongpur','Dhaka','khulna','Rajshahi']}
  ]

  render() {
    return (
      <SafeAreaView>
        <SectionList
          sections={this.DATA}
          renderItem={({item})=><this.itemChild itemData={item} />}
          renderSectionHeader={({section:{title}})=><this.itemHeadChild header={title} />}
          keyExtractor={(item,index)=>item+index}
        />
      </SafeAreaView>
    );
  }
}

export default ComponentSectionList;
