import { combineReducers } from 'redux';
import inputs from './inputs';
import posts from './posts';

export default combineReducers({
    posts,
    inputs,
});