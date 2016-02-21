import Immutable from 'immutable';

/* Action Types */
export const UPDATE_VIDEOS = 'UPDATE_VIDEOS';

/* Action Creators */
export const updateVideos = (videoData) => {
  const videos = Immutable.List(videoData.map(video => Immutable.Map(video)));
  return {type: UPDATE_VIDEOS, videos};
};