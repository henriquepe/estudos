// o Slice é um centralizador para criarmos as actions, os reducers
// e o state facilmente em um arquivo.
import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    // nosso estado do counter
    value: 0,
  },
  reducers: {
    // increment é uma action
    increment: state => {
      state.value += 1;
    },
    // decrement é uma action
    decrement: state => {
      state.value -= 1;
    },
    // incrementByAmount é uma action
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
