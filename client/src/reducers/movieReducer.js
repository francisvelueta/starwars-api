import { GET_FILM, LOADING_FILM  } from '../actions/types';

const initialState = {
  movies : [],
  loading: false
}


export default function(state = initialState, action) {
  switch (action.type) {

    case GET_FILM:
    return {
      ...state,
      movies: action.payload,
      loading: false
    }
    case LOADING_FILM:
    return {
      ...state,
      loading: true
    }

    default:
      return state;
  }
}
