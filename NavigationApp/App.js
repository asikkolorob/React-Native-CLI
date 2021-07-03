// In App.js in a new project

import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {ActivityIndicator,View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { DrawerContent } from './screens/DrawerContent';
import { AuthContext } from './screens/components/context';

import MainTabsScreen from './screens/MainTabsScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import SupportScreen from './screens/SupportScreen';
import ExploreScreen from './screens/ExploreScreen';
import RootStackScreen from './screens/screen/RootStackScreen';


const Drawer = createDrawerNavigator();

function App() {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null); 

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(userName, password) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      let userToken;
      userToken = 'bhbh';
      if( userName == 'user' && password == 'pass' ) {
        try {
          userToken = 'dfgdfg';
          await AsyncStorage.setItem('userToken', userToken);
        } catch(e) {
          console.log(e);
        }
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" color='#000' />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={MainTabsScreen} />
            <Drawer.Screen name="Bookmark" component={BookmarkScreen} />
            <Drawer.Screen name="Explore" component={ExploreScreen} />
            <Drawer.Screen name="Support" component={SupportScreen} />
          </Drawer.Navigator>
        )
        :
        <RootStackScreen />
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;

