import React from 'react';
import CurrentVideo from './currentVideo';
// import ChannelInfo from './channelInfo';
// import Pagination from './pagination';
import Videos from './videos';

const App = () => {
  return (
    <div className="app">
      <CurrentVideo />
      <Videos />
    </div>
  );
};

export default App;