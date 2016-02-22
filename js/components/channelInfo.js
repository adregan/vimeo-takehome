import React from 'react';
import { connect } from 'react-redux';

const ChannelInfo = ({ channel }) => {
  channel = channel.toJS();
  return (
    <section className="channel">
      <header className="channel__header">
        <img src={channel.header} />
      </header>
      <div className="channel-info">
        <h1 className="channel-info__name">{channel.name}</h1>
        <p className="channel-info__description">{channel.description}</p>
        <div className="channel-info__creator">
          <img src={channel.creatorAvatar} />
          <p>Created by <a href={channel.creatorLink}>{channel.creator}</a></p>
          <p>{channel.createdAgo}</p>
        </div>
      </div>
      <ul className="channel-stats">
        <li className="channel-stats__videos">{channel.videoCount} Videos</li>
        <li className="channel-stats__followers">{channel.userCount} Followers</li>
      </ul>
    </section>
  );
};

const select = (state) => {
  return {
    channel: state.channel
  };
};

export default connect(select)(ChannelInfo);