import axios from 'axios';
import { GET_STARSHIPFAV, STARSHIPFAV_LOADING, ADD_STARSHIPFAV } from './types';

export const getFavStarships = () => dispatch => {
dispatch(setStarshipsLoading());
axios
.get('/api/starships')
.then(res => dispatch ({
  type: GET_STARSHIPFAV,
  payload: res.data
    })
  )
};

export const addStarship = starship => dispatch => {
axios
.post('/api/starships', starship)
.then(res => dispatch({
  type: ADD_STARSHIPFAV,
  payload: res.data
}))
};


export const setStarshipsLoading = () => {
    return {
      type: STARSHIPFAV_LOADING
    };
};
