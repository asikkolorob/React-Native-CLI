import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SimpleLineIcons from 'react-native-vector-icons/Feather';

import { StyleSheet,View,Text,TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import DetailScreen from './DetailsScreen';


const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();

const MainTabsScreen = () => {
    return(
        <Tab.Navigator tabBarOptions={{
            showLabel:false,
            style:{
                position:'absolute',
                bottom:25,
                left:20,
                right:20,
                elevation:0,
                backgroundColor:'#F8C471',
                borderRadius:15,
                height:90,
                ... styles.shadow
            }
        }} >
            <Tab.Screen name="Home" component={HomeStackScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <SimpleLineIcons
                            name={'home'} size={30}
                            color={focused ? '#e32f45' : '#748c94'}
                        />
                        <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:13}}>Home</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Notification" component={NotificationStackScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <SimpleLineIcons
                            name={'bell'} size={30}
                            color={focused ? '#e32f45' : '#748c94'}
                        />
                        <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:13}}>Updates</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Profile" component={ProfileStackScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <SimpleLineIcons
                            name={'user'} size={30}
                            color={focused ? '#e32f45' : '#748c94'}
                        />
                        <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:13}}>Profile</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Explore" component={ExploreStackScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <SimpleLineIcons
                            name={'settings'} size={30}
                            color={focused ? '#e32f45' : '#748c94'}
                        />
                        <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:13}}>Setting</Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    );
}
    
export default MainTabsScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#D35400'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Home',
        headerLeft: () =>(
          <SimpleLineIcons.Button name="menu" size={25}
            backgroundColor="#D35400" onPress={() => navigation.
            openDrawer()}>
          </SimpleLineIcons.Button>
        ),
        headerRight: () =>(
          <View style={styles.headerRightView}>
            <TouchableOpacity>
              <SimpleLineIcons name={'search'} size={35} 
              color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.
            openDrawer()} >
              <SimpleLineIcons name={'more-vertical'} size={35} 
              color={'#fff'} />
            </TouchableOpacity>
          </View>
        )
      }} />
      <HomeStack.Screen name="Details" component={DetailScreen} options={{
        title:'Details Page',
        headerLeft: () =>(
          <SimpleLineIcons.Button name="menu" size={25}
            backgroundColor="#D35400" onPress={() => navigation.
            openDrawer()}>
          </SimpleLineIcons.Button>
        ),
        headerRight: () =>(
          <View style={styles.headerRightView}>
            <TouchableOpacity>
              <SimpleLineIcons name={'search'} size={35} 
              color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.
            openDrawer()} >
              <SimpleLineIcons name={'more-vertical'} size={35} 
              color={'#fff'} />
            </TouchableOpacity>
          </View>
        )
      }} />
    </HomeStack.Navigator>
  );
  
  const NotificationStackScreen = ({navigation}) => (
  <NotificationStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#D35400'
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }}>
    <NotificationStack.Screen name="Updates" component={NotificationScreen} 
      options={{
      headerLeft: () =>(
        <SimpleLineIcons.Button name="menu" size={25}
          backgroundColor="#D35400" onPress={() => navigation.
          openDrawer()}>
        </SimpleLineIcons.Button>
      ),
      headerRight: () =>(
          <View style={styles.headerRightView}>
            <TouchableOpacity>
              <SimpleLineIcons name={'search'} size={35} 
              color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.
            openDrawer()}>
              <SimpleLineIcons name={'more-vertical'} size={35} 
              color={'#fff'} />
            </TouchableOpacity>
          </View>
        )
    }}
    />
  </NotificationStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#D35400'
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }}>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} 
      options={{
      headerLeft: () =>(
        <SimpleLineIcons.Button name="menu" size={25}
          backgroundColor="#D35400" onPress={() => navigation.
          openDrawer()}>
        </SimpleLineIcons.Button>
      ),
      headerRight: () =>(
          <View style={styles.headerRightView}>
            <TouchableOpacity>
              <SimpleLineIcons name={'search'} size={35} 
              color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.
            openDrawer()}>
              <SimpleLineIcons name={'more-vertical'} size={35} 
              color={'#fff'} />
            </TouchableOpacity>
          </View>
        )
    }}
    />
  </ProfileStack.Navigator>
);

const ExploreStackScreen = ({navigation}) => (
  <ExploreStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#D35400'
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }}>
    <ProfileStack.Screen name="Setting" component={ExploreScreen}
      options={{
      headerLeft: () =>(
        <SimpleLineIcons.Button name="menu" size={25}
          backgroundColor="#D35400" onPress={() => navigation.
          openDrawer()}>
        </SimpleLineIcons.Button>
      ),
      headerRight: () =>(
          <View style={styles.headerRightView}>
            <TouchableOpacity>
              <SimpleLineIcons name={'search'} size={35} 
              color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.
            openDrawer()}>
              <SimpleLineIcons name={'more-vertical'} size={35} 
              color={'#fff'} />
            </TouchableOpacity>
          </View>
        )
    }}
    />
  </ExploreStack.Navigator>
);


const styles = StyleSheet.create({
    headerRightView:{
      flexDirection:'row'
    },
    shadow:{
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    }
  })