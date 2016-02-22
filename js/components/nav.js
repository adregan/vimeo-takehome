import React from 'react';
import { connect } from 'react-redux';
import randomChannel from '../utils/randomChannel';
import { changeChannel } from '../actions/channel';

const Nav = ({channel, dispatch}) => {
  let { name } = channel.toJS();
  return (
    <nav className="channel-nav">
      <button className="channel-nav__change" onClick={() => {
        dispatch(changeChannel(randomChannel()));
        window.scrollTo(0, 0);
      }}>
        Random Channel
      </button>
      <p className="channel-nav__current">Current Channel: {name}</p>
      <a href="https://github.com/adregan/vimeo-takehome" className="channel-nav__github">View on Gitbhub</a>
    </nav>
  );
};

const select = (state) => {
  return {
    channel: state.channel
  };
} ;

export default connect(select)(Nav);