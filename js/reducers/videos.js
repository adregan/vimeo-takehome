import Immutable from 'immutable';
import { UPDATE_VIDEOS } from '../actions/videos';

export const videos = (state = Immutable.List(), action) => {
  switch(action.type) {
    case UPDATE_VIDEOS:
      return action.videos;
    default:
      return state;
  }
}