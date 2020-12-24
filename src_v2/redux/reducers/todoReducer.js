import { chalkLog, chalkLogGroup } from "../../../utils";
import { ADD_TODO } from "../actions/actionTypes";
import undoable from "../utils/undoableReducer";

const initialState = {
  items: [],
};

function reducer(state = initialState, action = {}) {
  chalkLogGroup.purple('Todo Reducer');
  chalkLog.green('reducer -> current state', state);
  chalkLog.green('reducer -> current action', action);
  
  switch (action.type) {
    case ADD_TODO: 
    {
      const newState = {...state,  items: [...state.items, action.payload] };
      chalkLog.green('reducer -> returned state', newState);
      console.groupEnd();
      return newState;
    }
    default:
      chalkLog.green('reducer -> returned state', state);
      console.groupEnd();
      return state;
  }
}

const undoableTodoReducer = undoable(reducer);
export default undoableTodoReducer; 