import { chalkLog } from "../../../util";
import { ADD_TODO } from "../actions/actionTypes";
import undoable from "../utils/undoableReducer";

const initialState = {
  items: [],
};

function reducer(state = initialState, action = {}) {
  chalkLog.green('todo:reducer -> current state', state);
  chalkLog.green('todo:reducer -> current action', action);
  
  switch (action.type) {
    case ADD_TODO: 
    {
      const newState = {...state,  items: [...state.items, action.payload] };
      chalkLog.green('todo:reducer -> returned state', newState);
      chalkLog.darkGray('<==========================================>');
      return newState;
    }
    default:
      chalkLog.green('todo:reducer -> returned state', state);
      chalkLog.darkGray('<==========================================>');
      return state;
  }
}

const undoableTodoReducer = undoable(reducer);
export default undoableTodoReducer; 