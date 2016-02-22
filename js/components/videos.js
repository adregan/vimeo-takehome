import React from 'react';
import { connect } from 'react-redux';
import { updateCurrentVideo } from '../actions/currentVideo';

const Videos = ({ videos, currentVideo, dispatch }) => {
  videos = videos.toJS();
  currentVideo = currentVideo.toJS();
  return (
    <ul className="videos">
      {videos.map((video, i) => {
        return (
          <li className="video" key={i} onClick={(e) => dispatch(updateCurrentVideo(i))}>
            <img className="video__thumbnail" src={video.image} />
            <p className="video__name">
              {video.name}
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