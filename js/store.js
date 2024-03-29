import { combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { channel } from './reducers/channel';
import { videos } from './reducers/videos';
import { currentPage } from './reducers/currentPage';
import { currentVideo } from './reducers/currentVideo';
import { loading } from './reducers/loading';

const reducer = combineReducers({
  channel, videos, currentPage, currentVideo, loading
});

const configureStore = (initialState) => {
  const store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : undefined
  ));
  return store;
};

export default configureStore;