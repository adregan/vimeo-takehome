import Immutable from 'immutable';
import { CHANGE_CHANNEL } from '../actions/channel';

export const channel = (state = Immutable.Map(), action) => {
  switch(action.type) {
    case CHANGE_CHANNEL:
      return action.channel;
    default:
      return state;
  }
}