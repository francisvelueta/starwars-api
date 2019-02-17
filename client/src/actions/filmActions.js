import axios from 'axios';
import { GET_FILMS, LOADING_FILMS } from './types';

export const getFilms = () => dispatch => {
dispatch(setFilmsLoading());
axios
.get('https://swapi.co/api/films')
.then(res => dispatch({
  type: GET_FILMS,
  payload: res.data.results
})
)
}

export const setFilmsLoading = () => {
  return {
    type: LOADING_FILMS
  }
}
