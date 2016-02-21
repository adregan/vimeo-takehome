/*eslint no-undef: 0*/

import Immutable from 'immutable';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { UPDATE_CURRENT_VIDEO, updateCurrentVideo } from '../js/actions/currentVideo';
import range from '../js/utils/range';

const mockStore = configureMockStore([thunk]);
const mockVideos = Immutable.List(range(1, 15).map(i => {
  return Immutable.Map({title: `Video ${i}`});
}));

describe('Async Action Creators', () => {
  describe('currentVideo', () => {
    describe('updateCurrentVideo', (done) => {
      it('should create an action to update the current video', () => {
        const index = 9;
        const video = mockVideos.get(index);
        const expectedActions = [{type: UPDATE_CURRENT_VIDEO, video}];
        const store = mockStore({videos: mockVideos}, expectedActions, done);

        store.dispatch(updateCurrentVideo(index));
      });
    });
  });
});