import { chalkLog, chalkLogGroup } from "../../util";

// Original redux.js createStore ref: https://github.com/reduxjs/redux/blob/d6bad9a8be90defc71b27c33e1348a4f6133b852/src/createStore.js
export default function createStore(reducer, preloadedState, middleware) {
  let currentReducer = reducer;
  let currentState = preloadedState; // initial state while creating the store.
  let currentListners = [];
  let nextListners = currentListners;

  function getState() {
    return currentState;
  }

  function dispatch(action) {
    if (!action || typeof action !== 'object' || Array.isArray(action)) {
      throw new Error('Action must be an object!');
    }
    if (typeof action.type === 'undefined') {
      throw new Error('Action must have a type!');
    }
    
    
    chalkLog.blue("Store recieved an action");

    // Reducer returns the new state
    currentState = currentReducer(currentState, action);
    
    // Calling all the listeners/subscribers so that they can get the updated state
    const listeners = currentListners = nextListners;
    for(let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }

    return action;
  }

  function subscribe(listener) {
    nextListners.push(listener);
  }

  if (middleware) {
    return {
      getState,
      dispatch: middleware({dispatch, getState})(dispatch),
      subscribe
    };
  } else {
    return {
      getState,
      dispatch,
      subscribe
    };
  }
}