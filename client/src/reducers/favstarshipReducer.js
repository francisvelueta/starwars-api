import { GET_STARSHIPFAV, STARSHIPFAV_LOADING  } from '../actions/types';

const initialState = {
  favstarships : [],
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STARSHIPFAV:
    return {
      ...state,
      favstarships: action.payload,
      loading: false
    }
    case STARSHIPFAV_LOADING:
    return {
      ...state,
      loading: true
    }

    default:
      return state;
  }
}
