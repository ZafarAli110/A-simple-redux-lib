import createStore from "./createStore";
import { chalkLog } from "../utils";

const initialState = {
  counter: 0,
};

// Reducer returns the new state
function reducer(state = initialState, action = {}) {
  chalkLog.green('reducer -> current state', state);
  chalkLog.green('reducer -> current action', action);
  
  if (action.type === 'INCREMENT') {
    const newState = Object.assign({}, state, { counter: state.counter + 1 });
    chalkLog.green('reducer -> returned state', newState);
    return newState;
  } else if (action.type === 'DECREMENT') {
      const newState = Object.assign({}, state, { counter: state.counter - 1 });
      chalkLog.green('reducer -> returned state', newState);
      return newState;
  }

  chalkLog.green('reducer -> returned state', state);
  return state;
}

// Create store
const store = createStore(reducer, initialState);

// Dispatch an action on button click
document.getElementById('btn-increment').addEventListener('click', () => {
  store.dispatch({
    type: 'INCREMENT'
  });
})

document.getElementById('btn-decrement').addEventListener('click', () => {
  store.dispatch({
    type: 'DECREMENT'
  });
})

// Subscribe to store
store.subscribe(() => {
  const state = store.getState();
  chalkLog.brown('store.subscribe -> store.getState()', state);
  render(state); // update the UI
});


// Render the UI
function render(state) {
  chalkLog.teal('render -> state', state);
  document.getElementById('counter').textContent = state.counter;
}

// Bootstrap the application
function loadApp() {
  const initialState = store.getState();
  chalkLog.green('loadRedux -> store.getState() ->', initialState);
  render(initialState); // render initialState
}

loadApp();