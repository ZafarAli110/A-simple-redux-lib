import createStore from "./redux/createStore";
import rootReducer from "./redux/reducers/rootReducer";
import CounterComponent from "./components/counter.component";
import TodoComponent from "./components/todo.component";

const store = createStore(rootReducer, {});

function loadApp() {
  // render the initialState
  const counterComponent = new CounterComponent(store);
  counterComponent.render();
  const todoComponent = new TodoComponent(store);
  todoComponent.render(); 
}

// Bootstrap the application 
loadApp();