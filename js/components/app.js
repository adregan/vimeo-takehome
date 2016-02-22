import React from 'react';
import Video from './video';
import Header from './header';
import Channel from './channel';
import Pagination from './pagination';
import Videos from './videos';

const App = () => {
  return (
    <div className="app">
      <Header />
      { /*<Video /> */ }
      <div className="channel-videos-wrapper">
        <Channel />
        <Videos />
      </div>
      <Pagination />
    </div>
  );
};

export default App;