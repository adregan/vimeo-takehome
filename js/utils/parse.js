import moment from 'moment';
import { maxWidth } from '../config';

export const parseVideos = (videos) => {
  return videos.map(video => {
    let embed = video.embed.html;

    const embedLinkResults = embed.match(/\"(https:\/\/player.vimeo.com\/video\/[\d]*)\?[\S]*\"/);
    const fullLink = embedLinkResults[0];
    const link = embedLinkResults[1];
    const heightResults = embed.match(/height=\"([\d]*)\"/);
    const widthResults = embed.match(/width=\"([\d]*)\"/);

    const replaceHeight = heightResults[0];
    const height = heightResults[1];
    const replaceWidth = widthResults[0];
    const width = widthResults[1];

    const ratio = width / maxWidth;
    const newWidth = `width="${maxWidth}"`;
    const newHeight = `height="${Math.floor(height / ratio)}"`;

    const newLink = `"${link}?badge=1&portrait=1&byline=1&title=1"`;

    embed = embed
      .replace(fullLink, newLink)
      .replace(replaceHeight, newHeight)
      .replace(replaceWidth, newWidth);

    return {
      name: video.name,
      description: video.description,
      embed: embed,
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
