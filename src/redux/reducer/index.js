import {combineReducers} from 'redux';
import animateReducer from './animate';
import authReducer from './auth';

const indexReducer = combineReducers({
    animate : animateReducer,
    auth: authReducer
})

export default indexReducer;
