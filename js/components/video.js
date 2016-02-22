import React from 'react';
import { connect } from 'react-redux';

const Video = ({video}) => {
  video = video.toJS();
  return (
    <section className="video">
      <h1 className="video__title">
        {video.name}
      </h1>
      <h2 className="video__user">
        from <a href={video.creatorLink}>{video.creator}</a>
      </h2>
      <article className="video__embed" dangerouslySetInnerHTML={{__html: video.embed}} />
      <p className="video__description">{video.description}</p>
      <footer className="video__footer">
        <p>Uploaded {video.createdAgo}</p>
        <ul className="video__stats">
          <li className="video__stat video__stat--views">
            {video.plays} Plays
          </li>
          <li className="video__stat video__stat--likes">
            {video.likes} Likes
          </li>
          <li className="video__stat video__stat--comments">
            {video.comments} Comments
          </li>
        </ul>
        <p className="video__link">
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


export default connect(select)(Video);