import AsyncStorage from '@react-native-community/async-storage';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import eventsReducer from './reducer';

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [''],
};

const reducers = {
  events: eventsReducer,
};

const persistedReducer = persistReducer(config, combineReducers(reducers));

export const configureStore = preloadedState => {
  const store = createStore(
    persistedReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware),
  );

  const persistor = persistStore(store);

  return {store, persistor};
};
