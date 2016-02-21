import Immutable from 'immutable';
import { UPDATE_CHANNEL } from '../actions/channel';

export const channel = (state = Immutable.Map(), action) => {
  switch(action.type) {
    case UPDATE_CHANNEL:
      return action.channel;
    default:
      return state;
  }
};