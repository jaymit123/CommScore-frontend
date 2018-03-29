import { SET_ALERT } from '../actions/types';


export default (state = { message: null, type: null }, action) => {

    switch (action.type) {
        case SET_ALERT:
            return action.payload;

        default:
            return state;
    }
}