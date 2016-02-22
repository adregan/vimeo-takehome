import React from 'react';
import Player from './player';
import Header from './header';
import Channel from './channel';
import Pagination from './pagination';
import Videos from './videos';

const App = () => {
  return (
    <div className="app">
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

export default App;