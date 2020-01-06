import axios from 'axios';
import { FETCH_USER, PAY_STRIPE } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

// STRIPE
export const handleToken = token => async dispatch => {
  const res = await axios.post('api/stripe', token);
  dispatch({ type: PAY_STRIPE, payload: null });
  dispatch({ type: FETCH_USER, payload: res.data });
};
