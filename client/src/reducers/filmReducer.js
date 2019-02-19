import { GET_FILMS, LOADING_FILMS  } from '../actions/types';

// initial state
const initialState = {
  films : [],
  loading: false
}

// Add Reducers
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FILMS:
    return {
      ...state,
      films: action.payload,
      loading: false
    }
    case LOADING_FILMS:
    return {
      ...state,
      loading: true
    }


    default:
      return state;
  }
}
