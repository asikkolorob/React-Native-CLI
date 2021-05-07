import React, { Component } from 'react'
import { View ,Text,Image,FlatList,StyleSheet,ActivityIndicator,Alert} from 'react-native'

export class App extends Component {

  constructor(){
    super();
    this.state={
      DATA:[],
      loading:true,
      refreshLoading:false
    }
  }

  componentDidMount=()=>{
    this.onApiCall();
  }

  ChildView=({img,title,short_des})=>{
    return(
      <View style={styles.container}>
        <Image style={styles.ImageStyle} source={{uri:img}}/>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.shortDes}>{short_des}</Text>
      </View>
    )
  }

  pullRefresh=()=>{
    this.onApiCall();
  }

  onApiCall=()=>{
    this.setState({refreshLoading:true})
    let url = 'http://www.apishooter.com/getArticleList';
    let config = {method:'GET'};
    fetch(url,config)
      .then((result)=>result.json())
      .then((response)=>{
        this.setState({DATA:response,loading:false,refreshLoading:false})
      })
      .catch((error)=>{
        Alert.alert('please chek your internet connection')
        this.setState({loading:false,refreshLoading:false})
      })
  }

  render() {

    if(this.state.loading==true){
      return(
        <View style={styles.container2}>
          <ActivityIndicator size='large' color='#000' />
        </View>
      );
    }
    else{
      return (
        <View>
          <FlatList
            onRefresh={()=>this.pullRefresh}
            refreshing={this.state.refreshLoading}
            data={this.state.DATA}
            keyExtractor={item => item.id.toString()}
            renderItem={({item})=><this.ChildView title={item.title} img={item.img} short_des={item.short_des} 
  
            />}
          />
        </View>
      )
    }

    
  }
}
const styles = StyleSheet.create({
  container:{
    height:250,
    width:'100%',
    padding:20
  },
  titleStyle:{
    fontSize:20,
  },
  shortDes:{
    fontSize:13,
  },
  ImageStyle:{
    width:'100%',
    height:130
  },
  container2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
export default App
