import { CHANGE_CHANNEL } from '../actions/channel';

export const loading = (state = 'LOADING', action) => {
  switch(action.type) {
    case CHANGE_CHANNEL:
      return action.status;
    default:
      return state;
  }
};