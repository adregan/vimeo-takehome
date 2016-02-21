import Immutable from 'immutable';

/* Action Types */
export const CHANGE_CHANNEL = 'CHANGE_CHANNEL';

/* Action Creators */
export const changeChannel = (channelData) => {
  const channel = Immutable.Map(channelData);
  return {type: CHANGE_CHANNEL, channel};
}