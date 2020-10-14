import {combineReducers} from 'redux';
import animateReducer from './animate';
import authReducer from './auth';
import userReducers from './user';

const indexReducer = combineReducers({
    animate : animateReducer,
    auth: authReducer,
    user: userReducers,
})

export default indexReducer;
