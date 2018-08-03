import {Workstate} from '../workstate';
import * as CapActions from './capActions';
import fakeTaskItems from "../../fakeTaskItems";

const initialState = {
  items: fakeTaskItems,
  workstate: Workstate.VIEW_LIST,
  currentIndex: -1
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CapActions.ADD: {
      return {
        ...state,
        workstate: Workstate.ADD,
        currentIndex: -1,
      };
    }
    case CapActions.SAVE: {
      return {
        ...state,
        workstate: Workstate.VIEW_DETAILS,
      };
    }
    case CapActions.EDIT: {
      return {
        ...state,
        workstate: Workstate.EDIT,
      };
    }
    case CapActions.REMOVE: {
      return {
        ...state,
        workstate: Workstate.VIEW_LIST,
        currentIndex: -1,
      };
    }
    case CapActions.SELECT: {
      return {
        ...state,
        workstate: Workstate.SELECTED,
        currentIndex: payload.selectedIndex,
      };
    }
    case CapActions.VIEW_DETAILS: {
      return {
        ...state,
        workstate: Workstate.VIEW_DETAILS,
      };
    }
    case CapActions.VIEW_LIST: {
      return {
        ...state,
        workstate: Workstate.VIEW_LIST,
      };
    }
    case CapActions.SEARCH: {
      return {
        ...state,
        workstate: Workstate.SEARCH,
        currentIndex: -1,
      };
    }
    case CapActions.FIND: {
      return {
        ...state,
        workstate: Workstate.VIEW_LIST,
      };
    }

    default:
      return state;
  }
}
