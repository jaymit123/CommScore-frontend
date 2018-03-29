import { FETCH_ALL_STATS, FETCH_USER_STATS } from '../actions/types';


export default (state = { user: null, all: null }, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_USER_STATS:
            return { user: action.payload, all: state.all };

        case FETCH_ALL_STATS:
            return { all: action.payload, user: state.user }

        default:
            return state;

    }
}