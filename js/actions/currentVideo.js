import Immutable from 'immutable';

/* Action Types */
export const UPDATE_CURRENT_VIDEO = 'UPDATE_CURRENT_VIDEO';

/* Action Creators */
export const setCurrentVideo = (currentVideo) => {
  const video = Immutable.Map(currentVideo);
  return {type: UPDATE_CURRENT_VIDEO, video};
};

export const updateCurrentVideo = (index) => {
  return (dispatch, getState) => {
    const { videos } = getState();
    const video = videos.get(index);
    return dispatch({type: UPDATE_CURRENT_VIDEO, video});
  };
};