import React from 'react';
import { Provider } from 'react-redux'
import { store } from '../store/config/store_config'


import MainPage from './MainPage';

const App = () => {
  return (
      <Provider store={store}>
          <MainPage />
      </Provider>
  );
};

export default App;
