import moment from 'moment';
import { maxWidth } from '../config';

export const parseVideos = (videos) => {
  return videos.map(video => {
    let embed = video.embed.html;
    const id = video.uri.split('/').pop();
    const embedSrc = `https://player.vimeo.com/video/${id}?badge=1&portrait=1&byline=1&title=1`;
    const height = video.height;
    const width = video.width;
    const ratio = width / maxWidth;
    const adjustedHeight = Math.floor(height / ratio);

    return {
      name: video.name,
      description: video.description,
      embed: embed,
      width: maxWidth,
      height: adjustedHeight,
      embedSrc: embedSrc,
      link: video.link,
      image: video.pictures.sizes[2].link,
      creator: video.user.name,
      creatorLink: video.user.link,
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
    description: channel.description,
    userCount: channel.metadata.connections.users.total,
    videoCount: channel.metadata.connections.videos.total,
    creator: channel.user.name,
    creatorLink: channel.user.link,
    creatorAvatar: channel.user.pictures.sizes[0].link
  };
};
