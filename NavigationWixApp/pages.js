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



//This is a component layout
// const component={
//     id:'MainId',
//     name:'MainPage',
//     options:{},
//     passProps:{
//         pageTitle:'Main Page Title',
//         PageSubTitle:'Main Sub Title',
//         PageSimpleText:'This is reactNative NavigationWix'
//     }
// }

// 1 page theke arek page navigat 
//  stack ={
//     children:[
//         {
//           component:{
//             name:'HomePage',
//             options:{topBar:{title:{text:'Home Page'}}}
//           }
//         }
//     ]
// }

//This is a stack Layout
// const stack ={
//     children:[
//         {
//             component:{
//                 name:'ContactPage'
//             }
//         },
//         {
//             component:{
//                 name:'AboutPage'
//             }
//         },
//         {
//             component:{
//                 name:'HomePage'
//             }
//         },
//         {
//             component:{
//                 name:'MainPage'
//             }
//         }
//     ],
//     options:{}
// }

//This is a BottomTabs 
// const bottomTabs ={
//     children:[
        
//         {
//           component:{
//             name:'HomePage',
//             options:{bottomTab:{text:'Home',icon:require('./src/images/home.png')},
//             topBar:{title:{text:'Home'},subtitle:{text:'ashik haha '}}
//             }
//           }
//         },
//         {
//           component:{
//             name:'AboutPage',
//             options:{bottomTab:{text:'About',icon:require('./src/images/globe.png')},
//             topBar:{title:{text:'Home Page'}}
//             }
//           }
//         },
//         {
//           component:{
//             name:'ContactPage',
//             options:{bottomTab:{text:'Contact',icon:require('./src/images/contact.png')},
//             topBar:{title:{text:'Home Page'}}
//             }
//          }
//         }
//     ]
// }

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root:{
      // bottomTabs:{
      //   children:[
      //     {
      //       stack: {
      //         children: [
      //           {
      //             component: {
      //               name: 'HomePage',
      //               options:{
      //                 topBar:{title:{text:'Home Page'},subtitle:{text:'Practice Purpose App'}},
      //                 bottomTab: {
      //                   icon: require('./src/images/home.png'),
      //                   text:'Home',
      //                   textColor:'#000',
      //                   selectedTextColor:'#000',
      //                   selectedIconColor: '#F85C70',
      //                   selectedBackgroundColor:'#F85C70',
      //                   activeBackgroundColor: '#F85C70',
      //                 }
      //               },
      //             }
      //           }
      //         ]
      //       }
      //     },
      //     {
      //       stack: {
      //         children: [
      //           {
      //             component: {
      //               name: 'AboutPage',
      //               options:{
      //                 topBar:{title:{text:'About Page'},subtitle:{text:'Practice Purpose App'}},
      //                 bottomTab: {
      //                   icon: require('./src/images/information.png'),
      //                   text:'About',
      //                   textColor:'#000',
      //                   selectedTextColor:'#000',
      //                   // selectedIconColor: '#F85C70',
      //                   selectedBackgroundColor:'red'
      //                 }
      //               }
      //             }
      //           }
      //         ]
      //       }
      //     },
      //     {
      //       stack: {
      //         children: [
      //           {
      //             component: {
      //               name: 'ContactPage',
      //               options:{
      //                 topBar:{title:{text:'Contact Page'},subtitle:{text:'Practice Purpose App'}},
      //                 bottomTab: {
      //                   icon: require('./src/images/contact.png'),
      //                   text:'Contact',
      //                   textColor:'#000',
      //                   selectedTextColor:'#000',
      //                   selectedIconColor: '#F85C70',
      //                   backgroundColor:'#F85C70'
      //                 }
      //               }
      //             }
      //           }
      //         ]
      //       }
      //     } 
      //   ]
      // },
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
    
    }
  });
});
            
                