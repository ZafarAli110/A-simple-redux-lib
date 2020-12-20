import combineReducers from '../utils/combineReducers';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';
import jokeReducer from './jokeReducer';

export default combineReducers({
  counter: counterReducer,
  todos: todoReducer,
  joke: jokeReducer
})