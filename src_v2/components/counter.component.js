import { increment, decrement } from "../redux/actions/actionCreators";
import { chalkLog, chalkLogGroup } from "../../util";

export default class CounterComponent {
  constructor(store) {
    chalkLogGroup.redish('Counter Component');
    
    this.state = {
      counter: 0,
    };

    store.subscribe(()=> { // Subscribe/Connect to store
      const state = store.getState();
      chalkLogGroup.redish('Counter Component');
      chalkLog.brown('subscribe -> store.getState()', state);
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
      console.groupEnd();
      chalkLog.darkGray('<==========================================>');
      chalkLog.brown('Counter component dispatched an action', increment());
      store.dispatch(increment());
    });
    
    document.getElementById('btn-decrement').addEventListener('click', () => {
      console.groupEnd();
      chalkLog.darkGray('<==========================================>');
      chalkLog.brown('Counter component dispatched an action', decrement());
      store.dispatch(decrement());
    });
  }

  // Render the UI
  render() { 
    const {counter} = this.state;
    chalkLog.teal('render -> counter', counter);
    console.groupEnd();
    this.counterElementRef.textContent = counter; 
  }
}