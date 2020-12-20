import { GET_JOKE, GET_JOKE_FAILED, GET_JOKE_SUCCESS } from "../actions/actionTypes";

const initialState = {
  loading: false,
  data: {
    setup: '',
    punchline: ''
  },
  error: ''
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_JOKE: 
      return {...state,  loading: true, error: ''};
    case GET_JOKE_SUCCESS: 
      return {...state, loading: false , data: action.payload};
    case GET_JOKE_FAILED: 
      return {...state, loading: false , error: action.payload};
    default:
      return state;
  }
}