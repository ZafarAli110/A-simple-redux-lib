import { addTodo, redo, undo } from "../redux/actions/actionCreators";

export default class TodoComponent {
  constructor(store) {
    this.state = {
      past: [],
      present: {
        items: []
      },
      future: [],
    };
    
    store.subscribe(()=> { // Subscribe/Connect to store
      const state = store.getState();
      this.setState({...state.todos });
    });

    this.setElementRef();
    this.bindActions(store);
  }

  setState(newState) {
    this.state = {...this.state, ...newState};
    this.render(); // Update the UI
  }

  setElementRef() {
    this.containerRef = document.getElementById('todo-container');
    this.btnAddRef = document.getElementById('btn-add');
    this.btnUndoRef = document.getElementById('btn-undo');
    this.btnRedoRef = document.getElementById('btn-redo');
    this.inputRef = document.getElementById('input');
  }

  bindActions(store) {
    this.btnAddRef.addEventListener('click', () => {
      const value = this.inputRef.value;
      if (value) {
        const payload = {
          text: value,
        }
        
        store.dispatch(addTodo(payload));
      }
      this.inputRef.value = '';
    });
    
    this.btnUndoRef.addEventListener('click', () => {
      store.dispatch(undo());
    });
    
    this.btnRedoRef.addEventListener('click', () => {
      store.dispatch(redo());
    });
  }

  canUndoRedo() {
    const { past, future } = this.state;
    past.length === 0 ? this.btnUndoRef.setAttribute('disabled', 'true') : this.btnUndoRef.removeAttribute('disabled') ;
    future.length === 0 ? this.btnRedoRef.setAttribute('disabled', 'true') : this.btnRedoRef.removeAttribute('disabled');
  }

  renderList(items) {
    this.canUndoRedo();

    // check for list ref
    const listRef = document.getElementById('todo-list');
    if (items.length === 0 ) {
      listRef && this.containerRef.removeChild(listRef); // remove old list from dom
      return null;
    }

    // create a ul element
    const ulElement = document.createElement('ul');
    ulElement.id = 'todo-list';
    
    // loop through all the items and append the list item to ul element
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.text;
      ulElement.appendChild(li);
    });
    
    // append the ul element to the container
    listRef ? this.containerRef.replaceChild(ulElement, listRef) : this.containerRef.appendChild(ulElement);  
  }

  // Render the UI
  render() { 
    const { items } = this.state.present;
    this.renderList(items);
  }
}