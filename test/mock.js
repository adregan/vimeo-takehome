import Immutable from 'immutable';
import range from '../js/utils/range';
import { parseVideos, parseChannel } from '../js/utils/parse';

const ApiVideos = range(1, 11).map(i => {
  return { 
    name: `Video ${i}`, 
    description: 'Hello Hello',
    created_time: '2016-02-21T23:09:04+00:00',
    embed: {
      html: '<embed />'
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
