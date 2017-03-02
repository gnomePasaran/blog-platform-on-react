export function changePage(id) {
  return {
    type: 'CHANGE_PAGE',
    currentPage: id
  };
}
