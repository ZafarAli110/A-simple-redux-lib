import { chalkLog, chalkLogGroup } from "../../util";

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
    // console.clear();  // uncomment this line if you wanted to see one action at a time in a console.log
    console.groupEnd();
    chalkLogGroup.brownish("Store recieved an action");
    chalkLog.blue("store's state -> applicationState", currentState);
    chalkLog.blue('dispatch -> action', action);

    // Reducer returns the new state
    chalkLog.blue("store is invoking the combine reducers's combination...");
    currentState = currentReducer(currentState, action);
    chalkLog.blue("store gets the new state -> applicationState", currentState);
    
    // Calling all the listeners/subscribers so that they can get the updated state
    chalkLog.blue("store is notifiying the listeners/subscribers about state change...");
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

  return {
    getState,
    dispatch,
    subscribe
  };
}