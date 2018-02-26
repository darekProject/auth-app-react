import axios from 'axios';
import {AUTH_USER, AUTH_ERROR} from './type';

const ROOT_URL = "http://localhost:3090";

export const signInUser = ({email, password}) => async dispatch => {
    try {
        const token = await axios.post(`${ROOT_URL}/signin`, {
            email,
            password
        });
        console.log(token);

        dispatch({type: AUTH_USER});
        localStorage.setItem('token', token.data.token);
    } catch (err) {
        return dispatch(authError('Error in login'))
    }
};

export const authError = (error) => {
    return {
        type: AUTH_ERROR,
        payload: error
    }
};
