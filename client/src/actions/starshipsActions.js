import axios from 'axios';
import { GET_STARSHIP, LOADING_STARSHIP } from './types';


export const getStarship = (url, id) => dispatch => {

dispatch(setstarshipLoading());
axios
.get(url)
.then(res => dispatch({
  type: GET_STARSHIP,
  payload: res.data,
  startshipId:id
  })
)
}

export const setstarshipLoading = () => {
  return {
    type: LOADING_STARSHIP
  }
}
