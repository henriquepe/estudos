import React from 'react';
import { View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
import TestPage from './src/pages/TestPage';

// import { Container } from './styles';

const MyApp = (props) => {
  return <Button title="Push to TestPAGE" onPress={() => Navigation.push(props.componentId, {
    component: {
      name: 'TestPage',
    }
  })}/>;
}

MyApp.options = {
  topBar: {
    title: {
      text: 'AppPage',
      color: '#000'
    },
    
  }
}


export default MyApp;