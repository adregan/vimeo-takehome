import Immutable from 'immutable';
import { UPDATE_CURRENT_VIDEO } from '../actions/currentVideo';

export const currentVideo = (state = Immutable.Map(), action) => {
  switch(action.type) {
    case UPDATE_CURRENT_VIDEO:
      return action.video;
    default:
      return state;
  }
};