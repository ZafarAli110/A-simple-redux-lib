import combineReducers from '../utils/combineReducers';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';

export default combineReducers({
  counter: counterReducer,
  todos: todoReducer
})