/*eslint no-undef: 0*/
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { UPDATE_VIDEOS } from '../js/actions/videos';
import { UPDATE_CURRENT_VIDEO, updateCurrentVideo } from '../js/actions/currentVideo';
import { UPDATE_CURRENT_PAGE } from '../js/actions/pagination';
import { changeChannel, UPDATE_CHANNEL} from '../js/actions/channel';
import fetchMock from 'fetch-mock';
import mock from './mock';

const mockStore = configureMockStore([thunk]);

describe('Async Action Creators', () => {
  describe('changeChannel', (done) => {
    it('should create and dispatch multiple actions to update the channel', () => {
      const currentVideo = mock.videos.get(0);
      const expectedActions = [
        {type: UPDATE_CHANNEL, channel: mock.channel},
        {type: UPDATE_VIDEOS, videos: mock.videos},
        {type: UPDATE_CURRENT_PAGE, page: 1},
        {type: UPDATE_CURRENT_VIDEO, video: mock.videos.get(0)}
      ];
      const store = mockStore({}, expectedActions, done);
      const link = 'https://api.vimeo.com/channels/12345'
      fetchMock
        .mock(link, mock.ApiChannel)
        .mock(`${link}/videos?per_page=10&page=1`, mock.ApiVideos);

      store.dispatch(changeChannel(12345));
      fetchMock.restore();
    });
  });
  describe('currentVideo', () => {
    describe('updateCurrentVideo', (done) => {
      it('should create an action to update the current video', () => {
        const index = 9;
        const video = mock.videos.get(index);
        const expectedActions = [{type: UPDATE_CURRENT_VIDEO, video}];
        const store = mockStore({videos: mock.videos}, expectedActions, done);

        store.dispatch(updateCurrentVideo(index));
      });
    });
  });
});