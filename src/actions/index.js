import axios from 'axios';
import {AUTH_USER, AUTH_ERROR, UNAUTH_USER} from './type';

const ROOT_URL = "http://localhost:3090";

export const signInUser = ({email, password}) => async dispatch => {
    try {
        const token = await axios.post(`${ROOT_URL}/signin`, {
            email,
            password
        });

        dispatch({type: AUTH_USER});
        localStorage.setItem('token', token.data.token);
    } catch (err) {
        return dispatch(authError('Error in login'));
    }
};

export const signUpUser = ({email, password}) => async dispatch => {
    try {
        const token = await axios.post(`${ROOT_URL}/signup`, {
            email,
            password
        });

        dispatch({type: AUTH_USER});
        localStorage.setItem('token', token.data.token);
    } catch (err) {
        dispatch(authError(err.response.data.error));
    }
};

export const signOutUser = () => {
    localStorage.removeItem('token');

    return {type: UNAUTH_USER};
};

export const authError = (error) => {
    return {
        type: AUTH_ERROR,
        payload: error
    }
};
