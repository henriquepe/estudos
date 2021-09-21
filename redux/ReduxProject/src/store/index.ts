import {configureStore} from '@reduxjs/toolkit';

// importo o reducer que irá cuidar do estado do counter
import counterReducer from '../features/counter/counterSlice';

// aqui estou criando um store vazio
const store = configureStore({
  reducer: {
    // declaro aqui que quem irá cuidar do estado do counter será
    // o slice que criamos em features
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
