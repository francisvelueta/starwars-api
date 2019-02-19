import { GET_STARSHIP, LOADING_STARSHIP  } from '../actions/types';

// initial state
const initialState = {
  starships : [],
  loading: false
}

// Add Reducers
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STARSHIP:
    return {
      ...state,
      starships: action.payload,
      loading: false,
      id: action.startshipId
    }
    case LOADING_STARSHIP:
    return {
      ...state,
      loading: true
    }
    default:
      return state;
  }
}
