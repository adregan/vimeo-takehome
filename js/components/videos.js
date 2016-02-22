import React from 'react';
import { connect } from 'react-redux';
import { updateCurrentVideo } from '../actions/currentVideo';

const shorten = (text, limit) => {
  if (!text) {return '';}
  if (text.length > limit) {
    return text.slice(0, limit) + '...';
  }
  return text;
};

const Videos = ({ videos, currentVideo, dispatch }) => {
  videos = videos.toJS();
  let { link } = currentVideo.toJS();
  return (
    <ul className="videos-list">
      {videos.map((video, i) => {
        let classes, current;
        if (video.link === link) {
          classes = 'video video--active';
          current = true;
        } 
        else {
          classes = 'video';
          current = false;
        } 
        return (
          <li className={classes} key={i} onClick={(e) => {!current && dispatch(updateCurrentVideo(i));}}>
            <img className="video__thumbnail" src={video.image} />
            <p className="video__name">
              {shorten(video.name, 36)}
            </p>
            <p className="video__meta">
              from <strong>{video.creator}</strong>
            </p>
          </li>
        );
      })}
    </ul>
  );
};

const select = (state) => {
  return {
    videos: state.videos,
    currentVideo: state.currentVideo
  };
};

export default connect(select)(Videos);