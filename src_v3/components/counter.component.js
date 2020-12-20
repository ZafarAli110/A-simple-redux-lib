import { increment, decrement } from "../redux/actions/actionCreators";

export default class CounterComponent {
  constructor(store) {
    this.state = {
      counter: 0,
    };

    store.subscribe(()=> { // Subscribe/Connect to store
      const state = store.getState();
      this.setState({...state.counter})
    });

    this.counterElementRef = document.getElementById('counter');
    this.bindActions(store);
  }

  setState(newState) {
    this.state = {...this.state, ...newState};
    this.render(); // Update the UI
  }

  bindActions(store) {
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
    this.counterElementRef.textContent = counter; 
  }
}