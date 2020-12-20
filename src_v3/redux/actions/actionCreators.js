import { 
  DECREMENT, 
  INCREMENT, 
  ADD_TODO, 
  UNDO, 
  REDO, 
  GET_JOKE, 
  GET_JOKE_SUCCESS, 
  GET_JOKE_FAILED 
} from "./actionTypes";

export const increment = () => ({type: INCREMENT}); 
export const decrement = () => ({type: DECREMENT}); 

export const addTodo = (payload) => ({type: ADD_TODO, payload}); 
export const undo = () => ({type: UNDO}); 
export const redo = () => ({type: REDO});

export const getJokeSuccess = (payload) => ({ type: GET_JOKE_SUCCESS, payload }); 
export const getJokeFailed = (error) => ({ type: GET_JOKE_FAILED, payload: error });

export const getJoke = (dispatch) => {
  dispatch({ type: GET_JOKE});
  return fetch('https://official-joke-api.appspot.com/random_joke') // https://github.com/15Dkatz/official_joke_api
         .then(res => res.json())
         .then(({ setup, punchline }) => {
          const payload = {
            setup, 
            punchline    
          };
          dispatch(getJokeSuccess(payload));
         })
         .catch(err => dispatch(getJokeFailed(err)));
};
 

