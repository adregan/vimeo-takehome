import Immutable from 'immutable';

/* Action Types */
export const CHANGE_CHANNEL = 'CHANGE_CHANNEL';
export const UPDATE_CHANNEL = 'UPDATE_CHANNEL';

/* Action Creators */
export const updateChannel = (channelData) => {
  const channel = Immutable.Map(channelData);
  return {type: UPDATE_CHANNEL, channel};
};

export const changeChannel = (channelId) => {
  return dispatch => {
  // Fetch channel/:channelId --> 
  // dispatch updateChannel

  // Fetch channel/:channelId/videos --> 
  // dispatch updateVideos & updateCurrentVideo(videos[0])
  };
};