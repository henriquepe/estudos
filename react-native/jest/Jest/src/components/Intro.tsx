import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';

export const Intro: React.FC = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <Text testID="hello">Hello {name}</Text>

      <View>
        <TextInput
          testID="input"
          placeholder="Digite seu nome"
          onChangeText={setName}
        />
      </View>

      <Text testID="name">O nome que você digitou foi: {name}</Text>
    </View>
  );
};
