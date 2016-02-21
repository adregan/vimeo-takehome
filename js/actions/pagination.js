/* Action Types */
export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';

/* Action Creators */
export const updateCurrentPage = (page) => {
  return {type: UPDATE_CURRENT_PAGE, page}
}

export const changePage = (page) => {
  return (dispatch, getState) => {
    const { channel } = getState();
    // To do make API call to get the page indicated
    // dispatch updateVideos
    // dispatch updateCurrentPage
  }
}