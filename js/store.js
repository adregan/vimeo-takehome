import { combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { channel } from './reducers/channel';
import { videos } from './reducers/videos';
import { currentPage } from './reducers/currentPage';
import { currentVideo } from './reducers/currentVideo';

const app = combineReducers({
  channel, videos, currentPage, currentVideo
});

export default function configureStore(initialState) {
  const store = createStore(app, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : undefined
  ));
  return store;
}