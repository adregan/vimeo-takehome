import Immutable from 'immutable';
import range from '../js/utils/range';
import { parseVideos, parseChannel } from '../js/utils/parse';

const ApiVideos = range(1, 11).map(i => {
  return { 
    name: `Video ${i}`, 
    description: 'Hello Hello',
    created_time: '2016-02-21T23:09:04+00:00',
    uri: '/videos/1238493',
    height: 5000,
    width: 3040,
    embed: {
      html: '<iframe src="https://player.vimeo.com/video/141891887?badge=1&amp;portrait=1&amp;byline=1&amp;title=1" width="980" height="551" frameborder="0" title="Covers" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>'
    },
    link: 'https://example.com',
    pictures: {
      sizes: [{link: ''}, {link: ''}, {link: ''}]
    },
    user: {
      name: 'Duncan Regan',
      link: 'http://something.com'
    },
    stats: {
      plays: 123
    },
    metadata: {
      connections: {
        likes: {total: 10},
        comments: {total: 20}
      }
    }
  };
});

const videoData = parseVideos(ApiVideos);
const videos = Immutable.List(videoData.map(video => {
  return Immutable.Map(video);
}));

const ApiChannel = {
  name: 'Cool Channel',
  header: {
    sizes: [{link: 'http://cool.png'}]
  },
  created_time: '2016-02-21T23:09:04+00:00',
  metadata: {
    connections: {
      users: {total: 200},
      videos: {total: 1000}
    }
  },
  user: {
    name: 'Duncan',
    link: 'https://greatlink.com',
    pictures: {sizes: [{link: 'https://anothergreatlink.com'}]}
  }
};

const channelData = parseChannel(ApiChannel, 12345);
const channel = Immutable.Map(channelData);

export default {
  ApiVideos,
  videoData,
  videos,
  ApiChannel,
  channelData,
  channel
};
