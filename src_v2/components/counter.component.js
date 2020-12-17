import { increment, decrement } from "../redux/actions/actionCreators";
import { chalkLog } from "../../util";

export default class CounterComponent {
  constructor(store) {
    this.state = {
      counter: 0,
    };

    store.subscribe(()=> { // Subscribe/Connect to store
      const state = store.getState();
      chalkLog.brown('counterComponent:subscribe -> store.getState()', state);
      this.setState({...state.counter})
    });

    this.counterElementRef = document.getElementById('counter');
    this.dispatchActions(store);
  }

  setState(newState) {
    this.state = {...this.state, ...newState};
    this.render(); // Update the UI
  }

  dispatchActions(store) {
    document.getElementById('btn-increment').addEventListener('click', () => {
      store.dispatch(increment());
    });
    
    document.getElementById('btn-decrement').addEventListener('click', () => {
      store.dispatch(decrement());
    });
  }

  // Render the UI
  render() { 
    const {counter} = this.state;
    chalkLog.teal('counterComponent:render -> counter', counter);
    this.counterElementRef.textContent = counter; 
  }
}