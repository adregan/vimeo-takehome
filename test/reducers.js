/*eslint no-undef: 0*/

import expect from 'expect';
import Immutable from 'immutable';
import range from '../js/utils/range';
import { UPDATE_CHANNEL, CHANGE_CHANNEL } from '../js/actions/channel';
import { channel } from '../js/reducers/channel';
import { UPDATE_VIDEOS } from '../js/actions/videos';
import { videos } from '../js/reducers/videos';
import { UPDATE_CURRENT_VIDEO } from '../js/actions/currentVideo';
import { currentVideo } from '../js/reducers/currentVideo';
import { UPDATE_CURRENT_PAGE } from '../js/actions/pagination';
import { currentPage } from '../js/reducers/currentPage';
import { loading } from '../js/reducers/loading';

describe('Reducers', () => {
  describe('channel', () => {
    it('should return the initial state', () => {
      expect(channel(undefined, {})).toEqual(Immutable.Map());
    });
    it('should handle UPDATE_CHANNEL action', () => {
      const state = Immutable.Map();
      const exampleChannel = Immutable.Map({
        name: '#1 Channel',
        description: 'Everything here is the best',
        created: '2016-02-20T11:46:07+00:00',
        creator: 'Duncan Regan',
        header: 'https://duncanregan.com/cool_pic.png'
      });
      expect(channel(state, {type: UPDATE_CHANNEL, channel: exampleChannel}))
        .toEqual(exampleChannel);
    });
  });
  describe('currentPage', () => {
    it('should return the initial state', () => {
      expect(currentPage(undefined, {})).toEqual(1);
    });
    it('should handle the UPDATE_CURRENT_PAGE action', () => {
      const page = 16;
      expect(currentPage(23, {type: UPDATE_CURRENT_PAGE, page})).toEqual(page);
    });
  });
  describe('currentVideo', () => {
    it('should return the initial state', () => {
      expect(currentVideo(undefined, {})).toEqual(Immutable.Map());
    });
    it('should handle UPDATE_CURRENT_VIDEO action', () => {
      const mockVideo = {title: 'Video 23'};
      const video = Immutable.Map(mockVideo);

      expect(currentVideo(Immutable.Map(), {type: UPDATE_CURRENT_VIDEO, video}))
        .toEqual(video);
    });
  });
  describe('loading', () => {
    it('should return the initial state', () => {
      expect(loading(undefined, {})).toEqual('LOADING');
    });
    it('should handle CHANGE_CHANNEL action', () => {
      const state = 'LOADED';

      expect(loading(state, {type: CHANGE_CHANNEL, status: 'LOADING'}))
        .toEqual('LOADING');
    });
  });
  describe('videos', () => {
    it('should return the initial state', () => {
      expect(videos(undefined, {})).toEqual(Immutable.List());
    });
    it('should handle UPDATE_VIDEOS action', () => {
      const state = Immutable.List();
      const mockVideos = range(1, 15).map(i => {
        return {title: `Video ${i}`};
      });
      const exampleVideos = Immutable.List(mockVideos.map(video => Immutable.Map(video)));

      expect(videos(state, {type: UPDATE_VIDEOS, videos: exampleVideos}))
        .toEqual(exampleVideos);
    });
  });
});