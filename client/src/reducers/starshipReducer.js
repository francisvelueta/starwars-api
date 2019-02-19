import { GET_STARSHIP, LOADING_STARSHIP  } from '../actions/types';

const initialState = {
  starships : [],
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STARSHIP:
    return {
      ...state,
      starships: action.payload,
      loading: false
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
