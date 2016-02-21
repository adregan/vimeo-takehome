import { UPDATE_CURRENT_PAGE } from '../actions/pagination';

export const currentPage = (state = 1, action) => {
  switch(action.type) {
    case UPDATE_CURRENT_PAGE:
      return action.page;
    default:
      return state;
  }
};