import moment from 'moment';

export const parseVideos = (videos) => {
  return videos.map(video => {
    return {
      name: video.name,
      description: video.description,
      embed: video.embed.html,
      link: video.link.replace('https://', ''),
      image: video.pictures.sizes[2].link,
      creator: video.user.name,
      plays: video.stats.plays,
      likes: video.metadata.connections.likes.total,
      comments: video.metadata.connections.comments.total,
      created: video.created_time,
      createdAgo: moment(video.created_time).fromNow()
    };
  });
};

export const parseChannel = (channel, id) => {
  return {
    id: id,
    name: channel.name,
    header: channel.header.sizes[0].link,
    created: channel.created_time,
    createdAgo: moment(channel.created_time).fromNow(),
    userCount: channel.metadata.connections.users.total,
    videoCount: channel.metadata.connections.videos.total,
    creator: channel.user.name,
    creatorLink: channel.user.link,
    creatorAvatar: channel.user.pictures.sizes[0].link
  };
};
