import React from 'react';
import {Provider} from 'react-redux';
import store from '../src/store';
import Home from './Components/Home';

const Main = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default Main;
