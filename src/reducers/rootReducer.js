import { combineReducers } from 'redux';
import forumReducer from "./forumReducer";


export default combineReducers({
    forums: forumReducer
});