import axios from 'axios';
import { FETCH_USER, LOGOUT_USER } from './types';



export const registerUser =  (values) => (dispatch) => {
    //  const response = await axios.post('', {}).then((result) => result);
    const response = 'registe user';
    dispatch({ 'type': FETCH_USER, 'payload': response });
}



// submits registeration code to cognito
export const confirmUser =  (values) => (dispatch) => {
    const response = 'confirm user';
    dispatch({ 'type': FETCH_USER, 'payload': response });
}

// fetches currently logged in user details from cognito
export const fetchUser =  (values) => (dispatch) => {
    //  const response = await axios.post('', {}).then((result) => result);
    const response = 'fetch user';
    dispatch({ 'type': FETCH_USER, 'payload': response });
}


export const logoutUser =  () => (dispatch) => {
    const response = 'logout user';
    dispatch({ 'type': LOGOUT_USER, 'payload': response });
}
