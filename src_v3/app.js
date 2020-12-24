import createStore from "./redux/createStore";
import rootReducer from "./redux/reducers/rootReducer";
import { loggingMiddleware, thunkMiddleware } from "./redux/middlewares";
import { appyMiddleware } from "./redux/utils/applyMiddleware";

import CounterComponent from "./components/counter.component";
import TodoComponent from "./components/todo.component";
import JokeComponent from "./components/joke.component";


const middlewares = [loggingMiddleware, thunkMiddleware];
const store = createStore(rootReducer, {}, appyMiddleware(...middlewares));

function loadApp() {
  const counterComponent = new CounterComponent(store);
  const todoComponent = new TodoComponent(store);
  const jokeComponent = new JokeComponent(store);
  counterComponent.render();
  todoComponent.render(); 
  jokeComponent.render();
}

// Bootstrap the application 
loadApp();