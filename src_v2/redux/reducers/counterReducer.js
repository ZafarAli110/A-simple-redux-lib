import { chalkLog } from "../../../util";
import { DECREMENT, INCREMENT } from "../actions/actionTypes";

const initialState = {
  counter: 0,
};

export default function reducer(state = initialState, action = {}) {
  chalkLog.green('counter:reducer -> current state', state);
  chalkLog.green('counter:reducer -> current action', action);
  
  switch (action.type) {
    case INCREMENT: 
    {
      const newState = {...state,  counter: state.counter + 1 };
      chalkLog.green('counter:reducer -> returned state', newState);
      chalkLog.darkGray('<==========================================>');
      return newState;
    }
    case DECREMENT: 
    {
      const newState = {...state, counter: state.counter - 1 };
      chalkLog.green('counter:reducer -> returned state', newState);
      chalkLog.darkGray('<==========================================>');
      return newState;
    }
    default:
      chalkLog.green('counter:reducer -> returned state', state);
      chalkLog.darkGray('<==========================================>');
      return state;
  }
}