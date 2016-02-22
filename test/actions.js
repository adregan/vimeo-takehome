/*eslint no-undef: 0*/

import expect from 'expect';
import Immutable from 'immutable';
import { UPDATE_CHANNEL, updateChannel } from '../js/actions/channel';
import { UPDATE_VIDEOS, updateVideos } from '../js/actions/videos';
import { UPDATE_CURRENT_PAGE, updateCurrentPage } from '../js/actions/pagination';
import { UPDATE_CURRENT_VIDEO, setCurrentVideo } from '../js/actions/currentVideo';
import range from '../js/utils/range';
import mock from './mock';

describe('Action Creators', () => {
  describe('channel', () => {
    describe('updateChannel', () => {
      it('should create an action to update the channel', () => {
        const channelData = {
          name: '#1 Channel',
          description: 'Everything here is the best',
          created: '2016-02-20T11:46:07+00:00',
          creator: 'Duncan Regan',
          creatorLink: 'https://vimeo.com/duncanregan',
          creatorAvatar: 'https://i.vimeocdn.com/portrait/cool_30x30.jpg?r=pad',
          header: 'https://duncanregan.com/cool_pic.png',
          usersCount: 100,
          videoCount: 4
        };
        const channel = Immutable.Map(channelData);
        const expectedAction = {type: UPDATE_CHANNEL, channel};
        expect(updateChannel(channelData)).toEqual(expectedAction);
      });
    });
  });
  describe('pagination', () => {
    describe('updateCurrentPage', () => {
      it('should create an action to update the current page', () => {
        const page = 16;
        const expectedAction = {type: UPDATE_CURRENT_PAGE, page};
        expect(updateCurrentPage(page)).toEqual(expectedAction);
      });
    });
  });
  describe('videos', () => {
    describe('updateVideos', () => {
      it('should create an action to update the videos', () => {
        const expectedAction = {type: UPDATE_VIDEOS, videos: mock.videos};
        expect(updateVideos(mock.videoData)).toEqual(expectedAction);
      });
    });
  });
  describe('currentVideo', () => {
    describe('setCurrentVideo', () => {
      it('should create an action to update the current video', () => {
        const video = mock.videos.get(0);
        const expectedAction = {type: UPDATE_CURRENT_VIDEO, video};
        const currentVideo = mock.videoData[0];
        expect(setCurrentVideo(currentVideo)).toEqual(expectedAction);
      });
    });
  });
});
