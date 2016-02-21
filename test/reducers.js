import expect from 'expect'
import Immutable from 'immutable';
import { CHANGE_CHANNEL } from '../js/actions/channel';
import { channel } from '../js/reducers/channel';

describe('Reducers', () => {
  describe('channel', () => {
    it('should return the initial state', () => {
      expect(channel(undefined, {})).toEqual(Immutable.Map());
    })
    it('should handle CHANGE_CHANNEL action', () => {
      const state = Immutable.Map();
      const exampleChannel = Immutable.Map({
          name: '#1 Channel',
          description: 'Everything here is the best',
          created: '2016-02-20T11:46:07+00:00',
          creator: 'Duncan Regan',
          header: 'https://duncanregan.com/cool_pic.png'
      });
      expect(channel(state, {type: CHANGE_CHANNEL, channel: exampleChannel}))
        .toEqual(exampleChannel);
    })
  })
})