import React from 'react';
import { Button, View } from 'react-native';

import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';

// import { Container } from './styles';


const ReactNavigationTest: NavigationFunctionComponent = ({ componentId }) => {
  return <View/>;
}

ReactNavigationTest.options = {
  topBar: {
    title: {
      text: 'App',
      color: 'white'
    },
    backButton: {
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  },
  bottomTab: {
    text: 'Welcome'
}
}

export default ReactNavigationTest;