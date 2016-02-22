import React from 'react';
import { connect } from 'react-redux';

const Header = ({ channel }) => {
  let { header } = channel.toJS();
  return (
    <header className="header">
      <img className="header__image" src={header} />
    </header>
  );
};

const select = (state) => {
  return {
    channel: state.channel
  };
};

export default connect(select)(Header);