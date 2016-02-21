import expect from 'expect';
import Immutable from 'immutable';
import { UPDATE_CHANNEL, updateChannel } from '../js/actions/channel';
import { UPDATE_VIDEOS, updateVideos } from '../js/actions/videos';
import { UPDATE_CURRENT_PAGE, updateCurrentPage } from '../js/actions/pagination';
import range from '../js/utils/range';

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
        }
        const channel = Immutable.Map(channelData);
        const expectedAction = {type: UPDATE_CHANNEL, channel};
        expect(updateChannel(channelData)).toEqual(expectedAction);
      })
    })
  })
  describe('videos', () => {
    describe('updateVideos', () => {
      it('should create an action to update the videos', () => {
        const videoData = range(10).map(i => {
          return Immutable.Map({name: `Video ${i + 1}`});
        })
        const videos = Immutable.List(videoData)
        const expectedAction = {type: UPDATE_VIDEOS, videos};
        expect(updateVideos(videoData)).toEqual(expectedAction)
  describe('pagination', () => {
    describe('updateCurrentPage', () => {
      it('should create an action to update the current page', () => {
        const page = 16;
        const expectedAction = {type: UPDATE_CURRENT_PAGE, page};
        expect(updateCurrentPage(page)).toEqual(expectedAction);
      })
    })
  })
})
