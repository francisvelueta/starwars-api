import { combineReducers } from 'redux';
import filmReducer from './filmReducer';
import starshipReducer from './starshipReducer';
import movieReducer from './movieReducer';
import favstarshipReducer from './favstarshipReducer'


// Combine Reducers
export default combineReducers({
  film: filmReducer,
  movie: movieReducer,
  starship: starshipReducer,
  favstarship: favstarshipReducer
})
