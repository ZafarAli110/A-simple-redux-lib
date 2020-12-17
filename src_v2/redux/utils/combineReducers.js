import { chalkLog } from "../../../util";
/* 
  The combineReducers function call takes an object with reducers and returns a reducer 
  function, the returned function must have the signature of a reducer function (the state and an action).
*/

// Original reduxjs combineReducers ref: https://github.com/reduxjs/redux/blob/d6bad9a8be90defc71b27c33e1348a4f6133b852/src/combineReducers.js
export default function combineReducers(reducers) {
  // First get an array with all the keys of the reducers 
  const reducerKeys = Object.keys(reducers);

  // Returns a root reducer function, our createStore function will call this function
  // with state and action whenever we dispatch an action via store.dispatch
  return function combination(state = {}, action) { 
    chalkLog.crimson('combineReducers -> combination has been invoked.')
    const nextState = {}; // This is the final object we are going to return

    // Loop through all the reducer keys
    for (let i = 0; i < reducerKeys.length; i++) {
      // Get the current key name
      const reducerKey = reducerKeys[i]; 
      
      // Get the current reducer function, 
      // remember we have passed the object with key and reducer fn as a value
      // in our combineReducers call
      const reducer = reducers[reducerKey]; 
      // Get the the previous state of current reducer
      const previousStateOfReducer = state[reducerKey]; 
      // Get the next state by calling the current reducer function
      const nextStateOfReducer = reducer(previousStateOfReducer, action);
      // Update the new state for the current reducer 
      nextState[reducerKey] = nextStateOfReducer; 
    }

    return nextState;
  }
}