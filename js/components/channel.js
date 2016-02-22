import React from 'react';
import { connect } from 'react-redux';

const Channel = ({ channel }) => {
  channel = channel.toJS();
  return (
    <section className="channel">
      <div className="channel-info">
        <h1 className="channel-info__name">{channel.name}</h1>
        <p className="channel-info__description">{channel.description}</p>
        <div className="creator">
          <div className="creator__container">
            <img className="creator__avatar" src={channel.creatorAvatar} />
            <div className="creator__details">
              <p className="creator__name">Created by <a href={channel.creatorLink}>{channel.creator}</a></p>
              <p className="creator__when">{channel.createdAgo}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const select = (state) => {
  return {
    channel: state.channel
  };
};

export default connect(select)(Channel);