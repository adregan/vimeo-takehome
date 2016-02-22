import React from 'react';
import CurrentVideo from './currentVideo';
import ChannelInfo from './channelInfo';
import Pagination from './pagination';
import Videos from './videos';

const App = () => {
  return (
    <div className="app">
      <ChannelInfo />
      <CurrentVideo />
      <Videos />
      <Pagination />
    </div>
  );
};

export default App;