import {store} from '@redux';
import React from 'react';
import {Provider} from 'react-redux';
import MainApp from './src/App';
import {persistor} from '@redux';
import {PersistGate} from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainApp />
      </PersistGate>
    </Provider>
  );
}

export default App;
