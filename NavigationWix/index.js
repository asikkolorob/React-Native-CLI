import {Navigation} from 'react-native-navigation'

import Main from './src/component/Main';
import About from './src/component/About';
import Contact from './src/component/Contact';
import Home from './src/component/Home';
import LoginHome from './src/component/LoginHome';
import SideMenu from './src/component/SideMenu';

Navigation.setDefaultOptions({
    statusBar:{
        backgroundColor:'#138D75'
    },
    topBar:{
        background:{
            color:'#138D75'
        },
        title:{
            color:'#fff'
        },
        backButton:{
            color:'#fff'
        }
    }
})

Navigation.registerComponent('MainPage',()=>Main);
Navigation.registerComponent('HomePage',()=>Home);
Navigation.registerComponent('AboutPage',()=>About);
Navigation.registerComponent('ContactPage',()=>Contact);
Navigation.registerComponent('LoginPage',()=>LoginHome);
Navigation.registerComponent('SideMenuScreen',()=>SideMenu);

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
// const stack ={
//     children:[
//         {
//             component:{
//                 name:'LoginPage',
//                 options:{topBar:{title:{text:'Login Page'}}}
//             }
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
//             component:{
//                 name:'MainPage',
//                 options:{bottomTab:{text:'Main',icon:require('./src/images/business-man.png')}}
//             }
//         },
//         {
//             component:{
//                     name:'HomePage',
//                     options:{bottomTab:{text:'Home',icon:require('./src/images/home.png')}}
//             }
//         },
//         {
//             component:{
//                     name:'AboutPage',
//                     options:{bottomTab:{text:'About',icon:require('./src/images/globe.png')}}
//                 }
//         },
//         {
//             component:{
//                     name:'ContactPage',
//                     options:{bottomTab:{text:'Contact',icon:require('./src/images/contact.png')}}
//             }
//         }
//     ]
// }

Navigation.events().registerAppLaunchedListener(()=>{
    Navigation.setRoot({
        root:{
            //side bar
            sideMenu:{
                left:{
                    component:{
                        name:'SideMenuScreen'
                    }
                },
                center:{
                    stack:{
                        options:{
                            topBar:{
                                leftButtons:{
                                    icon:require('./src/images/menu.png')
                                }
                                // rightButtons:{
                                //     icon:require('./src/images/menu.png')
                                // }
                            }
                        },
                        children:[
                            {
                                component:{
                                    name:'MainPage'
                                }
                            }
                        ]
                    }
                }
                // right:{
                //     component:{
                //         name:'SideMenuScreen'
                //     }
                // }
            }
        }
    })
})