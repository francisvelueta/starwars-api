import { GET_FILMS, LOADING_FILMS, GET_FILM, LOADING_FILM  } from '../actions/types';

const initialState = {
  films : [],
  loading: false
}


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
    case GET_FILM:
    return {
      ...state,
      films: action.payload,
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
