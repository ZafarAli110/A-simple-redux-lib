import { chalkLog, chalkLogGroup } from "../../../util";
import { DECREMENT, INCREMENT } from "../actions/actionTypes";

const initialState = {
  counter: 0,
};

export default function reducer(state = initialState, action = {}) {
  chalkLogGroup.redish('Counter Reducer');
  chalkLog.green('reducer -> current state', state);
  chalkLog.green('reducer -> current action', action);
  
  switch (action.type) {
    case INCREMENT: 
    {
      const newState = {...state,  counter: state.counter + 1 };
      chalkLog.green('reducer -> returned state', newState);
      console.groupEnd();
      return newState;
    }
    case DECREMENT: 
    {
      const newState = {...state, counter: state.counter - 1 };
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