import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableOpacityProps,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useReduxAppDispatch, useReduxAppSelector} from '../../hooks/hooks';
import {decrement, increment, incrementByAmount} from './counterSlice';

type ButtonProps = TouchableOpacityProps & {
  title: string;
};

const Button: React.FC<ButtonProps> = ({title, onPress}) => (
  <View style={styles.incrementButtonContainer}>
    <TouchableOpacity style={styles.incrementButton} onPress={onPress}>
      <Text style={styles.incrementButtonText}>{title}</Text>
    </TouchableOpacity>
  </View>
);

export const Counter: React.FC = () => {
  const count = useReduxAppSelector(state => state.counter.value);

  const dispatch = useReduxAppDispatch();

  const [amount, setAmount] = useState(0);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text>Vamos adicionar com Redux um valor novo ao Counter</Text>
        <Text>Counter: {count}</Text>
        <Button
          title="Increment"
          onPress={() => {
            dispatch(increment());
          }}
        />
        <Button
          title="Decrement"
          onPress={() => {
            dispatch(decrement());
          }}
        />

        <View style={styles.addAmountContainer}>
          <View style={styles.addAmountInputContainer}>
            <TextInput
              style={styles.addAmountInput}
              placeholder="Digite o valor a ser adicionado"
              placeholderTextColor="#fff"
              editable
              keyboardType="numeric"
              value={amount.toString()}
              onChangeText={e => setAmount(Number(e))}
            />
          </View>

          <Button
            title="Add amount"
            onPress={() => {
              dispatch(incrementByAmount(amount));
              setAmount(0);
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  incrementButtonContainer: {
    width: 200,
    height: 40,
    backgroundColor: '#48578475',
    borderRadius: 8,
    marginVertical: 10,
  },

  incrementButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  incrementButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  addAmountContainer: {
    width: '70%',
    alignItems: 'center',
    backgroundColor: '#999',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },

  addAmountInputContainer: {
    height: 40,
    backgroundColor: '#48578475',
    borderRadius: 8,
    marginVertical: 10,
    color: '#fff',
    width: 220,
    paddingLeft: 10,
  },

  addAmountInput: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    color: 'white',
  },
});
