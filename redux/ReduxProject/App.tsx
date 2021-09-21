import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

//  store criado
import store from './src/store';

// componente que fornece à toda a aplicação o store criado
import {Provider, useSelector} from 'react-redux';
import {Counter} from './src/features/counter/Counter';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
