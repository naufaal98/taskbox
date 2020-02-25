import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import InboxScreen from './components/InboxScreen';

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
