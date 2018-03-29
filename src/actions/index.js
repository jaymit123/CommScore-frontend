import axios from 'axios';
import { FETCH_USER, LOGOUT_USER, SET_ALERT, FETCH_ALL_STATS, FETCH_USER_STATS } from './types';
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
        await axios.post('https://1deart2nvj.execute-api.us-east-2.amazonaws.com/dev/compare-yourself', body, { headers }).then(result => result).catch(err => console.log(err));
    });

}

export const getStats = (type) => async (dispatch) => {
    if (type === 'single' || type === 'all') {
        await getAuthenticatedSession(async (values) => {
            const headers = { 'Content-Type': 'application/json', 'Authorization': values.getIdToken().getJwtToken() };
            const response = await axios.get(`https://1deart2nvj.execute-api.us-east-2.amazonaws.com/dev/compare-yourself/${type}?accessToken=${values.getAccessToken().getJwtToken()}`, { headers });

            const statType = (type === 'single') ? FETCH_USER_STATS : FETCH_ALL_STATS;
            let data = null;
            if (response !== null && response.data !== null) {
                data = (statType === FETCH_USER_STATS) ? response.data[0] : response.data;
            }
            dispatch({ 'type': statType, 'payload': data });
        });
    }
};

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
