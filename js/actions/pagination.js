/* Action Types */
export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';

/* Action Creators */
export const updateCurrentPage = (page) => {
  return {type: UPDATE_CURRENT_PAGE, page}
}
