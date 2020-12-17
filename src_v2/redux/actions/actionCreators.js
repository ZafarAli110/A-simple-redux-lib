import { DECREMENT, INCREMENT, ADD_TODO, UNDO, REDO } from "./actionTypes";

export const increment = () => ({type: INCREMENT}); 
export const decrement = () => ({type: DECREMENT}); 

export const addTodo = (payload) => ({type: ADD_TODO, payload}); 
export const undo = () => ({type: UNDO}); 
export const redo = () => ({type: REDO}); 
