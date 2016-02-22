import React from 'react';
import { connect } from 'react-redux';
import { pageSize } from '../config';
import { changePage } from '../actions/pagination';
import range from '../utils/range';

const PageNumber = ({number, current, dispatch}) => {
  let classes = (number === current) ? 
    'page-list__button page-list__button--active' :
    'page-list__button';
  return (
    <li className={classes} onClick={() => dispatch(changePage(number))}>
      {number}
    </li>
  );
};

const Pagination = ({ page, channel, dispatch}) => {
  const { videoCount } = channel.toJS();
  const max = Math.ceil(videoCount / pageSize);

  return (
    <nav className="pagination">
      <ul className="page-list">
        {(page > 1) && <li className="page-list__button" onClick={() => dispatch(changePage(page - 1))}>Prev</li>}
        {(page >= 4) && <li className="page-list__button" onClick={() => dispatch(changePage(1))}>1</li>}
        {(page >= 5) && <li className="page-list__ellipses">…</li>}
        {range(1, max + 1).map(pageNumber => {
          let display = false;
          if (page === 1 && pageNumber <= 6) {
            display = true;
          }
          else if (page > 1 && pageNumber >= page - 2 && pageNumber <= page + 2) {
            display = true;
          }
          else if (page === max && pageNumber >= (max - 6)) {
            display = true;
          }
          if (display) {
            return <PageNumber key={pageNumber} current={page} number={pageNumber} dispatch={dispatch} />;
          }
        })}
      {(page <= max - 5) && <li className="page-list__ellipses">…</li>}
      {(page <= max - 4) && <li key="last-page" className="page-list__button" onClick={() => dispatch(changePage(max))}>{max}</li>}
      {(page < max) && <li key="next-page" className="page-list__button" onClick={() => dispatch(changePage(page + 1))}>Next</li>}
      </ul>
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