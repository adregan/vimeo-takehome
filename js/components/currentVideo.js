import React from 'react';
import { connect } from 'react-redux';

const CurrentVideo = ({video}) => {
  video = video.toJS();
  console.log(video);
  return (
    <section className="current-video">
      <h1 className="current-video__title">
        {video.name}
      </h1>
      <h2 className="current-video__user">
        from <a href={video.creatorLink}>{video.creator}</a>
      </h2>
      <article className="current-video__embed" dangerouslySetInnerHTML={{__html: video.embed}} />
      <p className="current-video__description">{video.description}</p>
      <footer className="current-video__footer">
        <p>Uploaded {video.createdAgo}</p>
        <ul className="stats">
          <li className="stats__stat stats__stat--views">
            {video.plays} Plays
          </li>
          <li className="stats__stat stats__stat--likes">
            {video.likes} Likes
          </li>
          <li className="stats__stat stats__stat--comments">
            {video.comments} Comments
          </li>
        </ul>
        <p className="video-link">
          # <a href={video.link}>{video.link && video.link.replace('https://', '')}</a>
        </p>
      </footer>
    </section>
  );
};

const select = (state) => {
  return {
    video: state.currentVideo
  };
};


export default connect(select)(CurrentVideo);