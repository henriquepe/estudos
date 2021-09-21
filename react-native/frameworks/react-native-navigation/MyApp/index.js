import { Navigation } from 'react-native-navigation';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TestPage from './src/pages/TestPage';

AppRegistry.registerComponent(appName, () => App);

Navigation.registerComponent('App', () => App);



Navigation.registerComponent('TestPage', () => TestPage);

Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'TestPage'
                        }
                    }
                ]
            }
        }
    })
})

Navigation.events().registerAppLaunchedListener(async () => {

    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'App'
                        }
                    }
                ]
            }
        }
    })


})


