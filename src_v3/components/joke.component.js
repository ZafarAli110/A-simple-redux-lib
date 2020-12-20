import { getJoke } from "../redux/actions/actionCreators";

export default class JokeComponent {
  constructor(store) {
    this.state = {
      loading: false,
      data: {
        setup: '',
        punchline: ''
      },
      error: ''
    };

    store.subscribe(() => { // Subscribe/Connect to store
      const state = store.getState();
      this.setState({ ...state.joke })
    });

    this.jokeContainerRef = document.getElementById('joke-container');
    this.bindAction(store);
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render(); // Update the UI
  }

  bindAction(store) {
    document.getElementById('btn-getJoke').addEventListener('click', () => {
      getJoke(store.dispatch);
    });
  }

  // Render the UI
  render() {
    const { loading, data, error } = this.state;
    
    if (loading) {
      return this.jokeContainerRef.textContent = 'Loading a joke please wait...';
    } else if (error) {
      return this.jokeContainerRef.textContent = `${error}, please try again.`;
    }

    const { setup, punchline } = data;
    
    const p1 = document.createElement('p');
    p1.setAttribute('style', 'margin: 5px')

    const p2 = document.createElement('p');
    p2.setAttribute('style', 'margin: 5px')
    
    p1.textContent = setup;
    p2.textContent = punchline && `${punchline} \uD83D\uDE00`;  // where \uD83D\uDE00 is a js emoji code 
    
    this.jokeContainerRef.textContent = '';
    this.jokeContainerRef.appendChild(p1)
    this.jokeContainerRef.appendChild(p2)
  }
}