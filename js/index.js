import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import randomChannel from './utils/randomChannel';
import { changeChannel } from './actions/channel';
import App from './components/app';
 
const store = configureStore({});
store.dispatch(changeChannel(randomChannel()));

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('load'));
};
