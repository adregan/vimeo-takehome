import Immutable from 'immutable';
import vimeo, { CHANNEL, VIDEOS } from '../utils/vimeo';
import { parseVideos, parseChannel } from '../utils/parse';
import { updateVideos } from './videos';
import { updateCurrentPage } from './pagination';
import { setCurrentVideo } from './currentVideo';

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
    dispatch({type: CHANGE_CHANNEL, status: 'LOADING'});
    Promise.all([
      vimeo(channelId, CHANNEL),
      vimeo(channelId, VIDEOS)
    ])
    .then(([channel, videos]) => {
      const channelData = parseChannel(channel, channelId);
      const videoData = parseVideos(videos.data);
      const page = videos.page;
      const currentVideo = videoData[0];

      dispatch(updateChannel(channelData));
      dispatch(updateVideos(videoData));
      dispatch(updateCurrentPage(page));
      dispatch(setCurrentVideo(currentVideo));
      dispatch({type: CHANGE_CHANNEL, status: 'LOADED'});
    })
    .catch(err => console.error(err));
  };
};