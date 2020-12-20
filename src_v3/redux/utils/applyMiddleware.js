// Original redux.js applyMiddleware ref:- https://github.com/reduxjs/redux/blob/d6bad9a8be90defc71b27c33e1348a4f6133b852/src/applyMiddleware.js
export const appyMiddleware = (...middlewares) => store => {
  if (middlewares.length === 0) {
    return dispatch => dispatch;
  }
  
  const middlewareAPI = {
    getState: store.getState,
    dispatch: (action, ...args) => dispatch(action, ...args)
  }
  
  if (middlewares.length === 1) {
    return middlewares[0](middlewareAPI);
  }

  const boundMiddlewares  = middlewares.map(middleware => middleware(middlewareAPI));
  
  return boundMiddlewares.reduce((a, b) => next => a(b(next)));
}
