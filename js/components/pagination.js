import React from 'react';
import { connect } from 'react-redux';
import { pageSize } from '../config';
import { changePage } from '../actions/pagination';
import range from '../utils/range';

const Pagination = ({ page, channel, dispatch}) => {
  const { videoCount } = channel.toJS();
  const max = Math.ceil(videoCount / pageSize);

  return (
    <nav className="pagination">
      {(page > 1) && <button onClick={() => dispatch(changePage(page - 1))}>Prev</button>}
      <ul>
        {range(1, max + 1).map(pageNumber => {
          return (
            <li key={pageNumber} onClick={() => dispatch(changePage(pageNumber))}>
              {pageNumber}
            </li>
          );
        })}
      </ul>
      {(page < max) && <button onClick={() => dispatch(changePage(page + 1))}>Next</button>}
    </nav>
  );
};

const select = (state) => {
  return {
    page: state.currentPage,
    channel: state.channel
  };
};

export default connect(select)(Pagination);