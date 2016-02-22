import React from 'react';
import { connect } from 'react-redux';

const Videos = ({ videos }) => {
  return (
    <section className="videos">

    </section>
  );
};

const select = (state) => {
  return {
    videos: state.videos
  };
};

export default connect(select)(Videos);