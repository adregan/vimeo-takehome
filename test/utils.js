/*eslint no-undef: 0*/

import range from '../js/utils/range';
import vimeo, { VIDEOS, CHANNEL } from '../js/utils/vimeo';
import expect from 'expect';
import fetchMock from 'fetch-mock';

describe('Utils', () => {
  describe('range', () => {
    it('should produce an array of length n, starting at 0', () => {
      expect(range(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      expect(range(10).length).toEqual(10);
      expect(range(5)).toEqual([0, 1, 2, 3, 4]);
      expect(range(5).length).toEqual(5);
      expect(range(8)).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
      expect(range(8).length).toEqual(8);
    });
    it('should produce an array of length n - x, from x to n - 1', () => {
      expect(range(2, 7)).toEqual([2, 3, 4, 5, 6]);
      expect(range(2, 7).length).toEqual(5);
      expect(range(12, 20)).toEqual([12, 13, 14, 15, 16, 17, 18, 19]);
      expect(range(12, 20).length).toEqual(8);
      expect(range(89, 92)).toEqual([89, 90, 91]);
      expect(range(89, 92).length).toEqual(3);
    });
    it('should return an empty array if end value is less than the start value', () => {
      expect(range(7, 2)).toEqual([]);
      expect(range(20, 12)).toEqual([]);
      expect(range(92, 89).length).toEqual([]);
    });
  });
  describe('vimeo', () => {
    it('should fetch channel by id', () => {
      const mockResponse = {
        created_time: '2016-02-20T11:46:07+00:00',
        description: 'Everything here is the best',
        header: {},
        link: 'https://vimeo.com/channels/number-one',
        metadata: {},
        modified_time: '2016-02-20T11:46:07+00:00',
        name: '#1 Channel',
        pictures: {},
        privacy: {},
        uri: '/channels/number-one',
        user: {}
      };

      fetchMock.mock('https://api.vimeo.com/channels/number-one', mockResponse);

      vimeo('number-one', CHANNEL)
        .then(data => {
          expect(data).toEqual(mockResponse);
          expect(data.description).toEqual('Everything here is the best');
          fetchMock.restore();
        });
    });
    it('should fetch channel videos by id', () => {
      const mockResponse = {total: 100, page: 1, paging: {}, per_page: 25, data: []};
      fetchMock.mock('https://api.vimeo.com/channels/number-one', mockResponse);
      vimeo('number-one', VIDEOS)
        .then(data => {
          expect(data).toEqual(mockResponse);
          expect(data.total).toEqual(100);
          fetchMock.restore();
        });
    });
    it('should throw an error if sent an unsupported type', () => {
      fetchMock.mock('https://api.vimeo.com/channels/number-one', {});

      expect(() => {
        vimeo('number-one', 'UNSUPPORTED');
      }).toThrow(/Unsupported type: UNSUPPORTED/);

      fetchMock.restore();
    });
  });
});