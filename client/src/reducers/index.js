import { combineReducers } from 'redux';
import filmReducer from './filmReducer';
import starshipReducer from './starshipReducer';
import movieReducer from './movieReducer';

export default combineReducers({
  film: filmReducer,
  movie: movieReducer,
  starship: starshipReducer
})
