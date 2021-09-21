import { Navigation } from "react-native-navigation";
import Home from "../pages/Home";
import Welcome from "../pages/Welcome";
import {name as appName} from '../../app.json';
import App from "../../App";

export default async function registerComponentsToNavigate(){
    Navigation.registerComponent('Home', () => Home);

    Navigation.events().registerAppLaunchedListener(async () => {
    
        await Navigation.setRoot({
            root: {
                stack: {
                    children: [
                        {
                            component: {
                                name: 'Home'
                            }
                        }
                    ]
                }
            }
        })
    
    })
    
    Navigation.registerComponent('Welcome', () => Welcome);
    
    Navigation.events().registerAppLaunchedListener(async () => {
    
        await Navigation.setRoot({
            root: {
                stack: {
                    children: [
                        {
                            component: {
                                name: 'Welcome'
                            }
                        }
                    ]
                }
            }
        })
    
    })
    
    Navigation.registerComponent(appName, () => App);
    
    Navigation.events().registerAppLaunchedListener(async () => {
    
        await Navigation.setRoot({
            root: {
                stack: {
                    children: [
                        {
                            component: {
                                name: appName
                            }
                        }
                    ]
                }
            }
        })
    
    })

}

