import React from 'react';

import { Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

const TestPage = (props) => {
    return (
        <Button title="Push to AppPage" onPress={() => Navigation.push(props.componentId, {
            component: {
              name: 'App',
            }
        })}/>
    );
}

TestPage.options = {
    topBar: {
      title: {
        text: 'TestPage',
        color: '#000'
      }
    }
  }


export default TestPage;