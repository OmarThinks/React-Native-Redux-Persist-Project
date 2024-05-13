import React, {memo, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import MainApp from './src/App';
import {store} from '@redux';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default App;
