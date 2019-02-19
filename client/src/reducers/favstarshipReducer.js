import { GET_STARSHIPFAV, STARSHIPFAV_LOADING, ADD_STARSHIPFAV, DELETE_STARSHIPFAV  } from '../actions/types';

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

    case ADD_STARSHIPFAV:
  return {
    ...state,
    favstarships: [action.payload, ...state.favstarships]
  }

  case DELETE_STARSHIPFAV:
   return {
     ...state,
     favstarships: state.favstarships.filter(favstarship => favstarship._id !== action.payload)
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
