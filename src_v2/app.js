import createStore from "./redux/createStore";
import rootReducer from "./redux/reducers/rootReducer";
import CounterComponent from "./components/counter.component";
import TodoComponent from "./components/todo.component";

const store = createStore(rootReducer, {});

function loadApp() {
  const counterComponent = new CounterComponent(store);
  const todoComponent = new TodoComponent(store);
  // render the initialState
  counterComponent.render(); 
  todoComponent.render(); 
}

// Bootstrap the application 
loadApp();