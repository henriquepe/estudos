import { Navigation } from 'react-native-navigation';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Home from './src/pages/Home';
import Welcome from './src/pages/Welcome';
import registerComponentsToNavigate from './src/navigation/navigation.registers';
import organizeNavigation from './src/navigation/navigation.plan';

AppRegistry.registerComponent(appName, () => App);


registerComponentsToNavigate();

organizeNavigation();