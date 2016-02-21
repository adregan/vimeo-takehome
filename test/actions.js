import expect from 'expect';
import Immutable from 'immutable';
import { CHANGE_CHANNEL, changeChannel } from '../js/actions/channel';
import { UPDATE_VIDEOS, updateVideos } from '../js/actions/videos';
import range from '../js/utils/range';

describe('Action Creators', () => {
  describe('channel', () => {
    describe('changeChannel', () => {
      it('should create an action to change the channel', () => {
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
        const expectedAction = {type: CHANGE_CHANNEL, channel};
        expect(changeChannel(channelData)).toEqual(expectedAction);
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
      })
    })
  })
})
