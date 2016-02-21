import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore({});

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <div>Yo Yo Yo</div>
    </Provider>,
    document.getElementById('load'));
};
