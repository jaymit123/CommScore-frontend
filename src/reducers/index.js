import { combineReducers } from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import statsReducer from './statsReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    'auth': authReducer,
    'form': formReducer,
    'alert': alertReducer,
    'stats':statsReducer
});