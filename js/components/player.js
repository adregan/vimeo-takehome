import React from 'react';
import { connect } from 'react-redux';
import marked from 'marked';

const Player = ({video}) => {
  video = video.toJS();
  return (
    <section className="player">
      <article className="player__embed">
        <iframe src={video.embedSrc} width={video.width} height={video.height} frameBorder="0" title={video.name} webkitAllowFullScreen mozallowFullScreen allowFullScreen></iframe>
      </article>
      
      <aside className="player__details">
        <div className="video-meta">
          <h1 className="video-meta__title">
            {video.name}
          </h1>
          <h2 className="video-meta__user">
            from <a href={video.creatorLink}>{video.creator}</a>
          </h2>
          <p className="video-meta__description" dangerouslySetInnerHTML={{__html: video.description && marked(video.description, {sanitize: true})}}/>
        </div>
        <ul className="video-stats">
          <li className="video-stats__stat video-stats__stat--uploaded">
            Uploaded {video.createdAgo}
          </li>
          <li className="video-stats__stat video-stats__stat--views">
            {video.plays} Plays
          </li>
          <li className="video-stats__stat video-stats__stat--likes">
            {video.likes} Likes
          </li>
          <li className="video-stats__stat video-stats__stat--comments">
            {video.comments} Comments
          </li>
          <li className="video-stats__stat video-stats__stat--link">
            # <a href={video.link}>{video.link && video.link.replace('https://', '')}</a>
          </li>
        </ul>

      </aside>

    </section>
  );
};

const select = (state) => {
  return {
    video: state.currentVideo
  };
};


export default connect(select)(Player);