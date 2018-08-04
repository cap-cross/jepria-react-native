export const ADD = 'ADD';
export const SAVE = 'SAVE';
export const REMOVE = 'REMOVE';
export const EDIT = 'EDIT';
export const FIND = 'FIND';
export const VIEW_DETAILS = 'VIEW_DETAILS';
export const VIEW_LIST = 'VIEW_LIST';
export const SEARCH = 'SEARCH';
export const SELECT = 'SELECT';

export function add() {
  return {
    type: ADD
  };
}

export function save() {
  return {
    type: SAVE
  };
}

export function edit() {
  return {
    type: EDIT
  };
}

export function remove() {
  return {
    type: REMOVE
  };
}

export function select(selectedIndex) {
  return {
    type: SELECT,
    payload: {
      selectedIndex
    }
  };
}

export function viewDetails(selectedIndex) {
  return {
    type: VIEW_DETAILS,
    payload: {
      selectedIndex
    }
  };
}

export function viewList() {
  return {
    type: VIEW_LIST
  };
}

export function search() {
  return {
    type: SEARCH
  };
}


export function find() {
  return {
    type: FIND
  };
}
