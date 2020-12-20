// Original thunkMiddleware ref:- https://github.com/reduxjs/redux-thunk/blob/master/src/index.js
const thunkMiddleware = ({dispatch, getState}) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  return next(action);
};

export default thunkMiddleware; 