import axios from 'axios';
import { GET_FILMS, LOADING_FILMS, GET_FILM, LOADING_FILM } from './types';

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

export const getFilm = id => dispatch => {
dispatch(setFilmLoading());
axios
.get(`https://swapi.co/api/films/${id}/`)
.then(res => dispatch({
  type: GET_FILM,
  payload: res.data
})
)
}

export const setFilmLoading = () => {
  return {
    type: LOADING_FILM
  }
}
