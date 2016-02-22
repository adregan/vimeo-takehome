/*eslint no-undef: 0*/
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { UPDATE_VIDEOS } from '../js/actions/videos';
import { UPDATE_CURRENT_VIDEO, updateCurrentVideo } from '../js/actions/currentVideo';
import { UPDATE_CURRENT_PAGE, changePage } from '../js/actions/pagination';
import { UPDATE_CHANNEL, CHANGE_CHANNEL, changeChannel} from '../js/actions/channel';
import fetchMock from 'fetch-mock';
import mock from './mock';
import { pageSize } from '../js/config';

const mockStore = configureMockStore([thunk]);
const link = 'https://api.vimeo.com/channels/12345';

describe('Async Action Creators', () => {
  describe('channel', () => {
    describe('changeChannel', (done) => {
      it('should create and dispatch multiple actions to update the channel', () => {
        const currentVideo = mock.videos.get(0);
        const expectedActions = [
          {type: CHANGE_CHANNEL, status: 'LOADING'},
          {type: UPDATE_CHANNEL, channel: mock.channel},
          {type: UPDATE_VIDEOS, videos: mock.videos},
          {type: UPDATE_CURRENT_PAGE, page: 1},
          {type: UPDATE_CURRENT_VIDEO, video: currentVideo},
          {type: CHANGE_CHANNEL, status: 'LOADED'}
        ];
        const store = mockStore({}, expectedActions, done);
        fetchMock
          .mock(link, mock.ApiChannel)
          .mock(`${link}/videos?per_page=${pageSize}&page=1`, {data: mock.ApiVideos, page: 1});

        store.dispatch(changeChannel(12345));
        fetchMock.restore();
      });
    });
  });
  describe('pagination', () => {
    describe('changePage', (done) => {
      it('should create and dispatch an action to update current page and videos', () => {
        const page = 16;
        const expectedActions = [
          {type: UPDATE_CURRENT_PAGE, page: page},
          {type: UPDATE_VIDEOS, videos: mock.videos}
        ];

        const store = mockStore({
          channel: mock.channel,
          videos: mock.videos,
          page: 10,
          currentVideo: {}
        }, expectedActions, done);

        fetchMock
          .mock(`${link}/videos?per_page=${pageSize}&page=${page}`, {data: mock.ApiVideos});

        store.dispatch(changePage(page));
        fetchMock.restore();
      });
    });
  });
  describe('currentVideo', () => {
    describe('updateCurrentVideo', (done) => {
      it('should create an action to update the current video', () => {
        const index = 5;
        const video = mock.videos.get(index);
        const expectedActions = [{type: UPDATE_CURRENT_VIDEO, video}];
        const store = mockStore({videos: mock.videos}, expectedActions, done);

        store.dispatch(updateCurrentVideo(index));
      });
    });
  });
});