import { chalkLog } from '../../../util.js';

const loggerMiddleware = ({ getState }) => next => action => {
  chalkLog.darkGray("<==========================================>");
  chalkLog.blue('before: appState -> ', JSON.stringify(getState(), null, 2));
  chalkLog.blue('action -> ', action);
  const returnedValue = next(action);
  chalkLog.blue('after: appState -> ', JSON.stringify(getState(), null, 2));
  return returnedValue;
}

export default loggerMiddleware;