import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import vimeo, { CHANNEL, VIDEOS } from './utils/vimeo';
import configureStore from './store';
import randomChannel from './utils/randomChannel';
import createState from './utils/createState';

let initialState = {};
const channelId = randomChannel();

Promise.all([
  vimeo(channelId, CHANNEL),
  vimeo(channelId, VIDEOS)
])
.then(([channel, videos]) => {
  initialState = createState(channel, videos);
})
.catch(err => console.error(err));

window.onload = () => {
  ReactDOM.render(
    <Provider store={configureStore(initialState)}>
      <div>Yo Yo Yo</div>
    </Provider>,
    document.getElementById('load'));
};
