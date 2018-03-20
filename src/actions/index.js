import axios from 'axios';
import { FETCH_USER, LOGOUT_USER, SET_ALERT } from './types';
import { SignUpUser, ConfirmUser, AuthenticateUser, getAuthenticatedSession, logout } from '../services/Cognito';
import _ from 'lodash';


export const registerUser = (values, setAlert) => (dispatch) => {
    SignUpUser(values, (values) => dispatch(setAlert(values)));
}

export const setAlert = (type, message) => { return { 'type': SET_ALERT, 'payload': { type, message } } };


export const submitDetails = (details) => async (dispatch) => {
    await getAuthenticatedSession(async (values, body = details) => {
        body = _.mapValues(body, value => parseInt(value, 10));
        const headers = { 'Content-Type': 'application/json', 'Authorization': values.getIdToken().getJwtToken() };
        const response = await axios.post('https://1deart2nvj.execute-api.us-east-2.amazonaws.com/dev/compare-yourself', body, { headers }).then(result => result).catch(err => console.log(err));

    });

}

export const confirmUser = (values) => (dispatch) => {
    ConfirmUser(values, (values) => dispatch(setAlert(values)));
}

export const fetchUser = () => (dispatch) => {
    getAuthenticatedSession((values) => dispatch({ 'type': FETCH_USER, 'payload': values }));
}

export const loginUser = (values) => (dispatch) => {
    AuthenticateUser(values, (values) => dispatch({ 'type': FETCH_USER, 'payload': values }));
};

export const logoutUser = () => (dispatch) => {
    logout();
    dispatch({ 'type': LOGOUT_USER, 'payload': null });
}
