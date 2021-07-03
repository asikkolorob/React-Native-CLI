import {Navigation} from 'react-native-navigation'

import Login from './src/component/Login';
import Home from './src/component/Home';
import About from './src/component/About';
import Contact from './src/component/Contact';

Navigation.setDefaultOptions({
    statusBar:{
      backgroundColor:'#D35400'
    },
    topBar:{
      background:{
        color:'#D35400'
      },
      title:{
        color:'#fff'
      },
      subtitle:{
        color:'#fff'
      },
      backButton:{
        color:'#fff'
      }
    }
})

Navigation.registerComponent('LoginPage',()=>Login)
Navigation.registerComponent('HomePage',()=>Home);
Navigation.registerComponent('AboutPage',()=>About);
Navigation.registerComponent('ContactPage',()=>Contact);


const loginRoot = {
  stack: {
    children: [
      {
        component: {
          name: 'LoginPage',
          options:{
            topBar:{title:{text:'Login Page'},subtitle:{text:'Practice Purpose App'}}
          },
        }
      }
    ]
  },
};

const mainRoot = {
  bottomTabs:{
      children:[
        {
          stack: {
            children: [
              {
                component: {
                  name: 'HomePage',
                  options:{
                    topBar:{title:{text:'Home Page'},subtitle:{text:'Practice Purpose Simple News App'}},
                    bottomTab: {
                      icon: require('./src/images/home.png'),
                      text:'Home',
                      textColor:'#000',
                      selectedTextColor:'#D35400',
                      selectedIconColor: '#D35400',
                      selectedBackgroundColor:'#D35400',
                      activeBackgroundColor: '#D35400',
                    }
                  },
                }
              }
            ]
          }
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'AboutPage',
                  options:{
                    topBar:{title:{text:'About Page'},subtitle:{text:'Practice Purpose App'}},
                    bottomTab: {
                      icon: require('./src/images/information.png'),
                      text:'About',
                      textColor:'#000',
                      selectedTextColor:'#D35400',
                      selectedIconColor: '#D35400',
                      selectedBackgroundColor:'#D35400'
                    }
                  }
                }
              }
            ]
          }
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'ContactPage',
                  options:{
                    topBar:{title:{text:'Contact Page'},subtitle:{text:'Practice Purpose App'}},
                    bottomTab: {
                      icon: require('./src/images/contact.png'),
                      text:'Contact',
                      textColor:'#000',
                      selectedTextColor:'#D35400',
                      selectedIconColor: '#D35400',
                      backgroundColor:'#D35400'
                    }
                  }
                }
              }
            ]
          }
        } 
      ]
    },
};

let isLoggedin = true;

Navigation.events().registerAppLaunchedListener( async () => {
  Navigation.setRoot( { root: ( isLoggedin ) ? mainRoot : loginRoot } );
});

