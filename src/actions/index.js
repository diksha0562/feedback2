import axios from 'axios';
import {FETCH_USER} from './types';
export const fetch_user = ()=> {
    return function(dispatch){
    axios.get('/api/current_user')
    .then(res => dispatch({type: FETCH_USER, payload: res.data}));
    }
};
//called whenever gets token from stripe checkout form
export const handle_token = token => async dispatch =>{
    const res = await axios.post('/api/stripe', token);
    dispatch({type:FETCH_USER, payload: res.data});
};

