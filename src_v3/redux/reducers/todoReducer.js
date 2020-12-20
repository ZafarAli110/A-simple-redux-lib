import { ADD_TODO } from "../actions/actionTypes";
import undoable from "../utils/undoableReducer";

const initialState = {
  items: [],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_TODO: 
      return {...state,  items: [...state.items, action.payload] };
    default:
      return state;
  }
}

const undoableTodoReducer = undoable(reducer);
export default undoableTodoReducer; 