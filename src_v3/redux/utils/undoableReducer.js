import { UNDO, REDO } from "../actions/actionTypes";

// This implementation is copied from redux docs: https://redux.js.org/recipes/implementing-undo-history
export default function undoable(reducer) {
  const initialState = {
    past: [],
    present: reducer(undefined, {}), // Call the reducer with undefined state and empty action to populate the initial state
    future: []
  };

  // Return a reducer that handles undo and redo
  return (state = initialState, action = {}) => {
    const { past, present, future } = state;

    switch(action.type) {
      case UNDO:
      {
        const previous = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);
        const newFuture = [present, ...future];
        return {
          past: newPast,
          present: previous,
          future: newFuture
        }; 
      }
      case REDO:
      {
        const next = future[0];
        const newFuture = future.slice(1);
        const newPast = [...past, present];
        return {
          past: newPast,
          present: next,
          future: newFuture
        }; 
      }
      default:
      {
        // Delegate handling the action to the passed reducer
        const newPresent = reducer(present, action);
        if (newPresent === present) {
          return state;
        };

        return {
          past: [...past, present],
          present: newPresent,
          future: []
        }; 
      }
    }
  };
}