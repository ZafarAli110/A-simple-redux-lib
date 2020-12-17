import { chalkLog } from "../util";

// Original redux.js createStore ref: https://github.com/reduxjs/redux/blob/d6bad9a8be90defc71b27c33e1348a4f6133b852/src/createStore.js
export default function createStore(reducer, preloadedState) {
  let currentReducer = reducer;
  let currentState = preloadedState; // initial state while creating the store.
  let currentListners = [];
  let nextListners = currentListners;

  function getState() {
    return currentState;
  }

  function dispatch(action) {
    chalkLog.darkGray('<==========================================>');
    chalkLog.blue('store.dispatch -> action', action);

    // Reducer returns the new state
    currentState = currentReducer(currentState, action);

    // Calling all the listeners/subscribers so that they can get the updated state
    const listeners = currentListners = nextListners;
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();  
    }

    return action;
  }

  function subscribe(listener) {
    nextListners.push(listener);
  }

  return {
    getState,
    dispatch,
    subscribe
  };
}