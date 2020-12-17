import { chalkLog, chalkLogGroup } from "../../util";
import { addTodo, redo, undo } from "../redux/actions/actionCreators";

export default class TodoComponent {
  constructor(store) {
    chalkLogGroup.purple('Todo Component');

    this.state = {
      past: [],
      present: {
        items: []
      },
      future: [],
    };
    
    store.subscribe(()=> { // Subscribe/Connect to store
      const state = store.getState();
      chalkLogGroup.purple('Todo Component');
      chalkLog.brown('subscribe -> store.getState()', state);
      this.setState({...state.todos });
    });

    this.setElementRef();
    this.dispatchActions(store);
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

  dispatchActions(store) {
    this.btnAddRef.addEventListener('click', () => {
      const value = this.inputRef.value;
      if (value) {
        const payload = {
          text: value,
        }
        console.groupEnd();
        chalkLog.darkGray('<==========================================>');
        chalkLog.teal('Todo component dispatched an action', addTodo(payload));
        store.dispatch(addTodo(payload));
      }
      this.inputRef.value = '';
    });
    
    this.btnUndoRef.addEventListener('click', () => {
      console.groupEnd();
      chalkLog.darkGray('<==========================================>');
      chalkLog.teal('Todo component dispatched an action', undo());
      store.dispatch(undo());
    });
    
    this.btnRedoRef.addEventListener('click', () => {
      console.groupEnd();
      chalkLog.darkGray('<==========================================>');
      chalkLog.teal('Todo component dispatched an action', redo());
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
    chalkLog.teal('render -> items', items);
    console.groupEnd(); 
    this.renderList(items);
  }
}