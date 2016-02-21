import expect from 'expect';
import Immutable from 'immutable';
import { CHANGE_CHANNEL, changeChannel } from '../js/actions/channel';

describe('Action Creators', () => {
  describe('channel', () => {
    describe('changeChannel', () => {
      it('should create an action to change the channel', () => {
        const channelData = {
          name: '#1 Channel',
          description: 'Everything here is the best',
          created: '2016-02-20T11:46:07+00:00',
          creator: 'Duncan Regan',
          header: 'https://duncanregan.com/cool_pic.png'
        }
        const channel = Immutable.Map(channelData);
        const expectedAction = {type: CHANGE_CHANNEL, channel}
        expect(changeChannel(channelData)).toEqual(expectedAction)
      })
    })
  })
})
