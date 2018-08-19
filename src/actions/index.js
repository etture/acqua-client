import axios from 'axios';
import {AUTH_USER, AUTH_ERROR} from "./types";

export const signup = (formProps, callback) => async dispatch => {
    try{
        console.log(formProps);
        const response = await axios.post('https://acqua-api.herokuapp.com/api/signup', formProps);
        dispatch({type: AUTH_USER, payload: response.data.token});
        localStorage.setItem('token', response.data.token);
        callback();
    }catch(e){
        dispatch({type:AUTH_ERROR, payload: 'Email is in use'});
    }
}