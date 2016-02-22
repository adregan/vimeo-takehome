import vimeo, { VIDEOS } from '../utils/vimeo';
import { parseVideos } from '../utils/parse';
import { updateVideos } from './videos';

/* Action Types */
export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';

/* Action Creators */
export const updateCurrentPage = (page) => {
  return {type: UPDATE_CURRENT_PAGE, page};
};

export const changePage = (page) => {
  return (dispatch, getState) => {
    const { channel, currentPage } = getState();
    const { id, videoCount } = channel.toJS();

    if (page === currentPage || page > Math.ceil(videoCount / 10)) {
      return;
    }

    vimeo(id, VIDEOS, page)
      .then(videos => {
        const videoData = parseVideos(videos.data);
        dispatch(updateCurrentPage(page));
        return dispatch(updateVideos(videoData));
      })
      .catch(err => console.error(err));
  };
};