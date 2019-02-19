import axios from 'axios';
import { GET_STARSHIPFAV, STARSHIPFAV_LOADING } from './types';

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

export const setStarshipsLoading = () => {
    return {
      type: STARSHIPFAV_LOADING
    };
};
