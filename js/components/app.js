import React from 'react';
import Player from './player';
import Header from './header';
import Channel from './channel';
import Pagination from './pagination';
import Videos from './videos';
import Loading from './loading';
import { connect } from 'react-redux';

const App = ({ loading }) => {
  return (
    <div className="app">
      {(loading === 'LOADING') && <Loading />}
      <Header />
      <Player /> 
      <div className="channel-videos-wrapper">
        <Channel />
        <Videos />
      </div>
      <Pagination />
    </div>
  );
};

const select = (state) => {
  return {
    loading: state.loading
  };
};

export default connect(select)(App);