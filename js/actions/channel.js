import Immutable from 'immutable';
import vimeo, { CHANNEL, VIDEOS } from '../utils/vimeo';

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
    Promise.all([
      vimeo(channelId, CHANNEL),
      vimeo(channelId, VIDEOS)
    ])
    .then(([channel, videos]) => {
      console.log(channel);
    // dispatch updateChannel
      console.log(videos);
    // dispatch updateVideos & updateCurrentVideo(videos[0])
    })
    .catch(err => console.error(err));
  };
};