import React from 'react';
import { Button, View } from 'react-native';

import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';

// import { Container } from './styles';


const Welcome: NavigationFunctionComponent = ({ componentId }) => {
  return <Button title="Vamos para os seus todos" onPress={() => Navigation.push(componentId, {
    component: {
      name: 'Home'
    }
  })}></Button>;
}

Welcome.options = {
  topBar: {
    title: {
      text: 'Welcome',
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

export default Welcome;