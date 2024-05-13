import {store} from '@redux';
import React from 'react';
import {Provider} from 'react-redux';
import MainApp from './src/App';

function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default App;
